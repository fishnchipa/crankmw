CREATE TYPE "public"."desc_type" AS ENUM('list', 'section');--> statement-breakpoint
CREATE TYPE "public"."pos_type" AS ENUM('sidebar', 'bottom');--> statement-breakpoint
CREATE TABLE "descriptions" (
	"product_id" integer NOT NULL,
	"place" integer NOT NULL,
	"description" text NOT NULL,
	"type" "desc_type" NOT NULL,
	"position" "pos_type" NOT NULL,
	CONSTRAINT "descriptions_product_id_place_pk" PRIMARY KEY("product_id","place")
);
--> statement-breakpoint
CREATE TABLE "preview_img" (
	"product_id" integer NOT NULL,
	"img" text NOT NULL,
	"alt" text NOT NULL,
	CONSTRAINT "preview_img_product_id_img_pk" PRIMARY KEY("product_id","img")
);
--> statement-breakpoint
ALTER TABLE "products_to_brands" ADD CONSTRAINT "products_to_brands_brand_id_product_id_pk" PRIMARY KEY("brand_id","product_id");--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "alt" text NOT NULL;--> statement-breakpoint
ALTER TABLE "descriptions" ADD CONSTRAINT "descriptions_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "preview_img" ADD CONSTRAINT "preview_img_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products" DROP COLUMN "description";