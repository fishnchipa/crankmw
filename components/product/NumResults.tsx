import { getProductCount } from "@/lib/db/queries";

type NumResultsProps = {
  filters: string[] | string | undefined;
  query: string[] | string | undefined;
  min: string[] | string | undefined;
  max: string[] | string | undefined;
};

export default async function NumResults({
  filters,
  query,
  min,
  max,
}: NumResultsProps) {
  const num = await getProductCount(filters, query, min, max);

  return <span>{num} Results</span>;
}
