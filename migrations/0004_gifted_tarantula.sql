ALTER TABLE "products" DROP CONSTRAINT "discount";--> statement-breakpoint
ALTER TABLE "products" ADD CONSTRAINT "discount_price" CHECK ("products"."discount" < "products"."price");