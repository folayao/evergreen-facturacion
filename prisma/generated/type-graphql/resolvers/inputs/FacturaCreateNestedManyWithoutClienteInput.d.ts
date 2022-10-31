import { FacturaCreateManyClienteInputEnvelope } from "../inputs/FacturaCreateManyClienteInputEnvelope";
import { FacturaCreateOrConnectWithoutClienteInput } from "../inputs/FacturaCreateOrConnectWithoutClienteInput";
import { FacturaCreateWithoutClienteInput } from "../inputs/FacturaCreateWithoutClienteInput";
import { FacturaWhereUniqueInput } from "../inputs/FacturaWhereUniqueInput";
export declare class FacturaCreateNestedManyWithoutClienteInput {
    create?: FacturaCreateWithoutClienteInput[] | undefined;
    connectOrCreate?: FacturaCreateOrConnectWithoutClienteInput[] | undefined;
    createMany?: FacturaCreateManyClienteInputEnvelope | undefined;
    connect?: FacturaWhereUniqueInput[] | undefined;
}
