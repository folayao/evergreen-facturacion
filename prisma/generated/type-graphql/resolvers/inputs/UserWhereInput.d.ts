import { EnumRoleFilter } from "../inputs/EnumRoleFilter";
import { FacturaListRelationFilter } from "../inputs/FacturaListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ProfileRelationFilter } from "../inputs/ProfileRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: IntFilter | undefined;
    email?: StringFilter | undefined;
    nombre?: StringNullableFilter | undefined;
    role?: EnumRoleFilter | undefined;
    facturas?: FacturaListRelationFilter | undefined;
    profile?: ProfileRelationFilter | undefined;
}
