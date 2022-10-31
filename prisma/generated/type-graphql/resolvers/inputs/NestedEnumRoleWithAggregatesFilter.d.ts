import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumRoleWithAggregatesFilter {
    equals?: "CLIENT" | "ADMIN" | undefined;
    in?: Array<"CLIENT" | "ADMIN"> | undefined;
    notIn?: Array<"CLIENT" | "ADMIN"> | undefined;
    not?: NestedEnumRoleWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumRoleFilter | undefined;
    _max?: NestedEnumRoleFilter | undefined;
}
