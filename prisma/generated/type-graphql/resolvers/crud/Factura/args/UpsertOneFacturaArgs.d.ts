import { FacturaCreateInput } from "../../../inputs/FacturaCreateInput";
import { FacturaUpdateInput } from "../../../inputs/FacturaUpdateInput";
import { FacturaWhereUniqueInput } from "../../../inputs/FacturaWhereUniqueInput";
export declare class UpsertOneFacturaArgs {
    where: FacturaWhereUniqueInput;
    create: FacturaCreateInput;
    update: FacturaUpdateInput;
}
