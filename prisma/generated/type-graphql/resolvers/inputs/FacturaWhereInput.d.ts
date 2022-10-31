import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class FacturaWhereInput {
    AND?: FacturaWhereInput[] | undefined;
    OR?: FacturaWhereInput[] | undefined;
    NOT?: FacturaWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    moneda?: StringFilter | undefined;
    monto?: FloatFilter | undefined;
    pais?: StringFilter | undefined;
    esEfectivo?: StringNullableFilter | undefined;
    published?: BoolFilter | undefined;
    cliente?: UserRelationFilter | undefined;
    clienteId?: IntFilter | undefined;
}
