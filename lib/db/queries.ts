import {
  and,
  asc,
  count,
  desc,
  eq,
  ilike,
  inArray,
  SQL,
  sql,
} from "drizzle-orm";
import { db } from "./drizzle";
import { z } from "zod";
import {
  brands,
  categories,
  previewImage,
  products,
  productsToCategories,
} from "./schema";
import { CartLoad } from "../session";
import { DescriptionType } from "../types/product";
import { PgSelect } from "drizzle-orm/pg-core";

const parseRange = (
  min: z.SafeParseReturnType<number, number>,
  max: z.SafeParseReturnType<number, number>,
) => {
  const mainPrice = sql<number>`COALESCE(${products.discount}, ${products.price})`;
  if (min.success && max.success) {
    if (min.data <= max.data) {
      return sql`${mainPrice} BETWEEN ${min.data} AND ${max.data}`;
    }
    return;
  }

  if (min.success) {
    return sql`${mainPrice} >= ${min.data}`;
  }

  if (max.success) {
    return sql`${mainPrice} <= ${max.data}`;
  }
};

const withDetails = () => {
  return db
    .selectDistinct({
      id: products.id,
      title: products.title,
      name: products.name,
      image: products.image,
      alt: products.alt,
      mainPrice: sql<number>`COALESCE(${products.discount}, ${products.price})`,
      origPrice: products.price,
    })
    .from(products)
    .leftJoin(
      productsToCategories,
      eq(productsToCategories.productId, products.id),
    )
    .leftJoin(categories, eq(productsToCategories.categoryId, categories.id))
    .$dynamic();
};

const withCount = () => {
  return db
    .selectDistinct({ count: count() })
    .from(products)
    .leftJoin(
      productsToCategories,
      eq(productsToCategories.productId, products.id),
    )
    .leftJoin(categories, eq(productsToCategories.categoryId, categories.id))
    .$dynamic();
};

const applyFilters = <T extends PgSelect>(
  qb: T,
  filters: string | string[] | undefined,
  query: string | string[] | undefined,
  min: string | string[] | undefined,
  max: string | string[] | undefined,
) => {
  const parsedFilters = Array.isArray(filters)
    ? filters
    : filters
      ? [filters]
      : [];
  const parsedQuery = z.string().safeParse(query);
  const parsedMin = z
    .number()
    .safeParse(parseInt(Array.isArray(min) ? min[0] : (min ?? "")));
  const parsedMax = z
    .number()
    .safeParse(parseInt(Array.isArray(max) ? max[0] : (max ?? "")));
  const parsedRange = parseRange(parsedMin, parsedMax);
  const filterList: SQL[] = [];

  if (parsedFilters.length > 0)
    filterList.push(inArray(categories.title, parsedFilters));
  if (parsedQuery.success)
    filterList.push(ilike(products.title, `%${parsedQuery.data}%`));
  if (parsedRange) filterList.push(parsedRange);
  return qb.where(and(...filterList));
};

const applySort = <T extends PgSelect>(
  qb: T,
  sortby: string | string[] | undefined,
) => {
  return qb.orderBy((t) => {
    switch (sortby) {
      case "price-ascending":
        return asc(t.mainPrice);
      case "price-descending":
        return desc(t.mainPrice);
      case "title-ascending":
        return asc(t.title);
      case "title-descending":
        return desc(t.title);
      default:
        return t.id;
    }
  });
};

const applyPagination = <T extends PgSelect>(
  qb: T,
  page: string | string[] | undefined,
  offset: number = 15,
) => {
  const parsedPage = z
    .number()
    .safeParse(parseInt(Array.isArray(page) ? "0" : (page ?? "0")));
  return qb
    .limit(offset)
    .offset(offset * (parsedPage.success ? parsedPage.data : 0));
};

export const getProductPage = async (
  filters: string | string[] | undefined,
  query: string | string[] | undefined,
  min: string | string[] | undefined,
  max: string | string[] | undefined,
  page: string | string[] | undefined,
  sortby: string | string[] | undefined,
  offset?: number,
) => {
  const appliedF = applyFilters(withDetails(), filters, query, min, max);
  const appliedS = applySort(appliedF, sortby);
  const appliedP = applyPagination(appliedS, page, offset);

  return await appliedP;
};

export const getProductCount = async (
  filters: string | string[] | undefined,
  query: string | string[] | undefined,
  min: string | string[] | undefined,
  max: string | string[] | undefined,
) => {
  const data = await applyFilters(withCount(), filters, query, min, max);
  return data[0].count;
};

export const getCategories = async () => {
  const data = await db.select().from(categories);

  return data;
};

export const getBrands = async () => {
  const data = await db.select().from(brands);
  return data;
};

export const getProduct = async (productTitle: string) => {
  const parsed = z.string().safeParse(productTitle);
  if (!parsed.success) return null;

  const data = await db
    .select()
    .from(products)
    .where(eq(products.name, parsed.data))
    .limit(1);

  if (!data.length) return null;

  const product = data[0];
  const prev = await getPreview(product.id);
  const desc = await getDescription(product.name);

  return {
    id: product.id,
    title: product.title,
    price: product.price, 
    description: desc,
    discount: product.discount,
    images: prev,
  };
};

const getDescription = async (productId: string) => {
  const response = await fetch(
    process.env.AWS_URL + `/${productId}/description.json`,
    {
      cache: "no-cache",
    },
  );
  if (response.ok) {
    return (await response.json()) as DescriptionType;
  }

  return null;
};

const getPreview = async (productId: string) => {
  const data = await db
    .select({
      image: previewImage.image,
      alt: previewImage.alt,
    })
    .from(previewImage)
    .where(eq(previewImage.productId, productId));

  return data;
};



export const getProductList = async (
  cartList?: CartLoad[],
) => {
  if (!cartList) return null;

  const productList = cartList.map((item) => item.productId);
  const data = await db
    .select()
    .from(products)
    .where(inArray(products.id, productList));

  if (!data.length) return null;

  const result = data.map(product => ({
    ...product,
    quantity:
        cartList.find(x => x.productId === product.id)?.quantity || 0
  }))

  return result;
};

export const getMaxPrice = async () => {
  const result = await db
    .select({
      max: sql<number>`MAX(COALESCE(${products.discount}, ${products.price}))`,
    })
    .from(products);
  return result[0];
};
