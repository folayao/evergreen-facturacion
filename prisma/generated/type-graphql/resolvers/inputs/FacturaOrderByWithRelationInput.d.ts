import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class FacturaOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    moneda?: "asc" | "desc" | undefined;
    monto?: "asc" | "desc" | undefined;
    pais?: "asc" | "desc" | undefined;
    esEfectivo?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    cliente?: UserOrderByWithRelationInput | undefined;
    clienteId?: "asc" | "desc" | undefined;
}
