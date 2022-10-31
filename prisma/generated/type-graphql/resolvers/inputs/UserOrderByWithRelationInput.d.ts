import { FacturaOrderByRelationAggregateInput } from "../inputs/FacturaOrderByRelationAggregateInput";
import { ProfileOrderByWithRelationInput } from "../inputs/ProfileOrderByWithRelationInput";
export declare class UserOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    nombre?: "asc" | "desc" | undefined;
    role?: "asc" | "desc" | undefined;
    facturas?: FacturaOrderByRelationAggregateInput | undefined;
    profile?: ProfileOrderByWithRelationInput | undefined;
}
