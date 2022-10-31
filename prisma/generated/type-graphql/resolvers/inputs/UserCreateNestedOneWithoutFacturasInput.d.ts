import { UserCreateOrConnectWithoutFacturasInput } from "../inputs/UserCreateOrConnectWithoutFacturasInput";
import { UserCreateWithoutFacturasInput } from "../inputs/UserCreateWithoutFacturasInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutFacturasInput {
    create?: UserCreateWithoutFacturasInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutFacturasInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
