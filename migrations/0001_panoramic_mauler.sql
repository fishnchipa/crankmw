ALTER TABLE "posts" RENAME TO "products";--> statement-breakpoint
ALTER TABLE "products_to_categories" DROP CONSTRAINT "products_to_categories_product_id_posts_id_fk";
--> statement-breakpoint
ALTER TABLE "products_to_categories" ADD CONSTRAINT "products_to_categories_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;