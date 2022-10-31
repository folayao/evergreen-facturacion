import { FacturaCreateManyClienteInputEnvelope } from "../inputs/FacturaCreateManyClienteInputEnvelope";
import { FacturaCreateOrConnectWithoutClienteInput } from "../inputs/FacturaCreateOrConnectWithoutClienteInput";
import { FacturaCreateWithoutClienteInput } from "../inputs/FacturaCreateWithoutClienteInput";
import { FacturaScalarWhereInput } from "../inputs/FacturaScalarWhereInput";
import { FacturaUpdateManyWithWhereWithoutClienteInput } from "../inputs/FacturaUpdateManyWithWhereWithoutClienteInput";
import { FacturaUpdateWithWhereUniqueWithoutClienteInput } from "../inputs/FacturaUpdateWithWhereUniqueWithoutClienteInput";
import { FacturaUpsertWithWhereUniqueWithoutClienteInput } from "../inputs/FacturaUpsertWithWhereUniqueWithoutClienteInput";
import { FacturaWhereUniqueInput } from "../inputs/FacturaWhereUniqueInput";
export declare class FacturaUpdateManyWithoutClienteNestedInput {
    create?: FacturaCreateWithoutClienteInput[] | undefined;
    connectOrCreate?: FacturaCreateOrConnectWithoutClienteInput[] | undefined;
    upsert?: FacturaUpsertWithWhereUniqueWithoutClienteInput[] | undefined;
    createMany?: FacturaCreateManyClienteInputEnvelope | undefined;
    set?: FacturaWhereUniqueInput[] | undefined;
    disconnect?: FacturaWhereUniqueInput[] | undefined;
    delete?: FacturaWhereUniqueInput[] | undefined;
    connect?: FacturaWhereUniqueInput[] | undefined;
    update?: FacturaUpdateWithWhereUniqueWithoutClienteInput[] | undefined;
    updateMany?: FacturaUpdateManyWithWhereWithoutClienteInput[] | undefined;
    deleteMany?: FacturaScalarWhereInput[] | undefined;
}
