import { FacturaOrderByWithRelationInput } from "../../../inputs/FacturaOrderByWithRelationInput";
import { FacturaWhereInput } from "../../../inputs/FacturaWhereInput";
import { FacturaWhereUniqueInput } from "../../../inputs/FacturaWhereUniqueInput";
export declare class UserFacturasArgs {
    where?: FacturaWhereInput | undefined;
    orderBy?: FacturaOrderByWithRelationInput[] | undefined;
    cursor?: FacturaWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "createdAt" | "moneda" | "monto" | "pais" | "esEfectivo" | "published" | "clienteId"> | undefined;
}
