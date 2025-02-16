import { relations, sql } from "drizzle-orm";
import {
  integer,
  text,
  pgTable,
  serial,
  primaryKey,
  timestamp,
  check,
} from "drizzle-orm/pg-core";

export const products = pgTable(
  "products",
  {
    id: text("id").primaryKey(),
    title: text("title").notNull(),
    name: text("name").notNull(),
    image: text("image").notNull(),
    alt: text("alt").notNull(),
    description: text("description").notNull(),
    price: integer("price").notNull(),
    priceId: text("price_id").notNull(),
    discount: integer("discount"),
    discountId: text("discount_id"),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => new Date()).notNull(),
    link: text("link").notNull()
  },
  (t) => [
    check(
      "discount_consistency",
      sql`
        (${t.discount} IS NULL AND ${t.discountId} IS NULL)
        OR
        (${t.discount} IS NOT NULL AND ${t.discountId} IS NOT NULL)
      `
    )
  ]
);

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
});

export const brands = pgTable("brands", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
});

export const productsToBrands = pgTable(
  "products_to_brands",
  {
    productId: text("product_id")
      .notNull()
      .references(() => products.id, { onDelete:"cascade" }),
    brandId: integer("brand_id")
      .notNull()
      .references(() => brands.id),
  },
  (t) => [primaryKey({ columns: [t.brandId, t.productId] })],
);

export const productsToCategories = pgTable(
  "products_to_categories",
  {
    productId: text("product_id")
      .notNull()
      .references(() => products.id, { onDelete:"cascade" }),
    categoryId: integer("category_id")
      .notNull()
      .references(() => categories.id),
  },
  (t) => [primaryKey({ columns: [t.categoryId, t.productId] })],
);

export const productCategory = relations(products, ({ many }) => ({
  productsToCategories: many(productsToCategories),
}));

export const productBrand = relations(products, ({ many }) => ({
  productsToBrands: many(productsToBrands),
}));

export const previewImage = pgTable(
  "preview_img",
  {
    productId: text("product_id")
      .notNull()
      .references(() => products.id, {onDelete: "cascade"}),
    image: text("img").notNull(),
    alt: text("alt").notNull(),
  },
  (t) => [primaryKey({ columns: [t.productId, t.image] })],
);

export type Product = typeof products.$inferSelect;

export type Category = typeof categories.$inferSelect;

export type Brand = typeof brands.$inferSelect;


