CREATE TABLE "bottom_desc" (
	"product_id" integer NOT NULL,
	"place" integer NOT NULL,
	"description" text NOT NULL,
	"type" "desc_type" NOT NULL,
	CONSTRAINT "bottom_desc_product_id_place_pk" PRIMARY KEY("product_id","place")
);
--> statement-breakpoint
ALTER TABLE "descriptions" RENAME TO "sidebar_desc";--> statement-breakpoint
ALTER TABLE "sidebar_desc" DROP CONSTRAINT "descriptions_product_id_products_id_fk";
--> statement-breakpoint
ALTER TABLE "sidebar_desc" DROP CONSTRAINT "descriptions_product_id_place_pk";--> statement-breakpoint
ALTER TABLE "sidebar_desc" ADD CONSTRAINT "sidebar_desc_product_id_place_pk" PRIMARY KEY("product_id","place");--> statement-breakpoint
ALTER TABLE "bottom_desc" ADD CONSTRAINT "bottom_desc_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sidebar_desc" ADD CONSTRAINT "sidebar_desc_product_id_products_id_fk" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sidebar_desc" DROP COLUMN "position";