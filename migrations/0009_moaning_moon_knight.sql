ALTER TABLE "preview_img" ALTER COLUMN "product_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products_to_brands" ALTER COLUMN "product_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products_to_categories" ALTER COLUMN "product_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "updatedAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "link" text NOT NULL;