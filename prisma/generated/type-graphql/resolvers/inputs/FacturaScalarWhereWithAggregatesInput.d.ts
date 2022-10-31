import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { FloatWithAggregatesFilter } from "../inputs/FloatWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class FacturaScalarWhereWithAggregatesInput {
    AND?: FacturaScalarWhereWithAggregatesInput[] | undefined;
    OR?: FacturaScalarWhereWithAggregatesInput[] | undefined;
    NOT?: FacturaScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    moneda?: StringWithAggregatesFilter | undefined;
    monto?: FloatWithAggregatesFilter | undefined;
    pais?: StringWithAggregatesFilter | undefined;
    esEfectivo?: StringNullableWithAggregatesFilter | undefined;
    published?: BoolWithAggregatesFilter | undefined;
    clienteId?: IntWithAggregatesFilter | undefined;
}
