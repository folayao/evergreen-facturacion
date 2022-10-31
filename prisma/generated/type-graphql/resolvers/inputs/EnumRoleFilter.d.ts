import { NestedEnumRoleFilter } from "../inputs/NestedEnumRoleFilter";
export declare class EnumRoleFilter {
    equals?: "CLIENT" | "ADMIN" | undefined;
    in?: Array<"CLIENT" | "ADMIN"> | undefined;
    notIn?: Array<"CLIENT" | "ADMIN"> | undefined;
    not?: NestedEnumRoleFilter | undefined;
}
