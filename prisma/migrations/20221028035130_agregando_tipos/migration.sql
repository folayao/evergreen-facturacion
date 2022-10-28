-- AlterTable
ALTER TABLE "Factura" ADD COLUMN     "esEfectivo" TEXT DEFAULT 'efectivo',
ALTER COLUMN "published" SET DEFAULT true;
