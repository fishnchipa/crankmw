ALTER TABLE "products" DROP CONSTRAINT "discount";--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "discount" CHECK ("products"."discount" < "products"."price");