import { FacturaOrderByWithAggregationInput } from "../../../inputs/FacturaOrderByWithAggregationInput";
import { FacturaScalarWhereWithAggregatesInput } from "../../../inputs/FacturaScalarWhereWithAggregatesInput";
import { FacturaWhereInput } from "../../../inputs/FacturaWhereInput";
export declare class GroupByFacturaArgs {
    where?: FacturaWhereInput | undefined;
    orderBy?: FacturaOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "createdAt" | "moneda" | "monto" | "pais" | "esEfectivo" | "published" | "clienteId">;
    having?: FacturaScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
