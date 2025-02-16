DROP TABLE "bottom_desc" CASCADE;--> statement-breakpoint
DROP TABLE "sidebar_desc" CASCADE;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "description" text NOT NULL;--> statement-breakpoint
DROP TYPE "public"."desc_type";--> statement-breakpoint
DROP TYPE "public"."pos_type";