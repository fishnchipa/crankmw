CREATE TABLE "brands" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "products_to_brands" (
	"product_id" integer NOT NULL,
	"brand_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "products_to_brands" ADD CONSTRAINT "products_to_brands_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_to_brands" ADD CONSTRAINT "products_to_brands_brand_id_brands_id_fk" FOREIGN KEY ("brand_id") REFERENCES "public"."brands"("id") ON DELETE no action ON UPDATE no action;