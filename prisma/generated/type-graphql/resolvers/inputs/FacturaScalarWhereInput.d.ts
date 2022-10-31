import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class FacturaScalarWhereInput {
    AND?: FacturaScalarWhereInput[] | undefined;
    OR?: FacturaScalarWhereInput[] | undefined;
    NOT?: FacturaScalarWhereInput[] | undefined;
    id?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    moneda?: StringFilter | undefined;
    monto?: FloatFilter | undefined;
    pais?: StringFilter | undefined;
    esEfectivo?: StringNullableFilter | undefined;
    published?: BoolFilter | undefined;
    clienteId?: IntFilter | undefined;
}
