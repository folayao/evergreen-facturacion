import { FacturaAvgAggregate } from "../outputs/FacturaAvgAggregate";
import { FacturaCountAggregate } from "../outputs/FacturaCountAggregate";
import { FacturaMaxAggregate } from "../outputs/FacturaMaxAggregate";
import { FacturaMinAggregate } from "../outputs/FacturaMinAggregate";
import { FacturaSumAggregate } from "../outputs/FacturaSumAggregate";
export declare class AggregateFactura {
    _count: FacturaCountAggregate | null;
    _avg: FacturaAvgAggregate | null;
    _sum: FacturaSumAggregate | null;
    _min: FacturaMinAggregate | null;
    _max: FacturaMaxAggregate | null;
}
