import { FacturaAvgOrderByAggregateInput } from "../inputs/FacturaAvgOrderByAggregateInput";
import { FacturaCountOrderByAggregateInput } from "../inputs/FacturaCountOrderByAggregateInput";
import { FacturaMaxOrderByAggregateInput } from "../inputs/FacturaMaxOrderByAggregateInput";
import { FacturaMinOrderByAggregateInput } from "../inputs/FacturaMinOrderByAggregateInput";
import { FacturaSumOrderByAggregateInput } from "../inputs/FacturaSumOrderByAggregateInput";
export declare class FacturaOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    moneda?: "asc" | "desc" | undefined;
    monto?: "asc" | "desc" | undefined;
    pais?: "asc" | "desc" | undefined;
    esEfectivo?: "asc" | "desc" | undefined;
    published?: "asc" | "desc" | undefined;
    clienteId?: "asc" | "desc" | undefined;
    _count?: FacturaCountOrderByAggregateInput | undefined;
    _avg?: FacturaAvgOrderByAggregateInput | undefined;
    _max?: FacturaMaxOrderByAggregateInput | undefined;
    _min?: FacturaMinOrderByAggregateInput | undefined;
    _sum?: FacturaSumOrderByAggregateInput | undefined;
}
