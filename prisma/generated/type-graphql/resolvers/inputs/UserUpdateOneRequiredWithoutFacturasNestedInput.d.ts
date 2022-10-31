import { UserCreateOrConnectWithoutFacturasInput } from "../inputs/UserCreateOrConnectWithoutFacturasInput";
import { UserCreateWithoutFacturasInput } from "../inputs/UserCreateWithoutFacturasInput";
import { UserUpdateWithoutFacturasInput } from "../inputs/UserUpdateWithoutFacturasInput";
import { UserUpsertWithoutFacturasInput } from "../inputs/UserUpsertWithoutFacturasInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneRequiredWithoutFacturasNestedInput {
    create?: UserCreateWithoutFacturasInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutFacturasInput | undefined;
    upsert?: UserUpsertWithoutFacturasInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateWithoutFacturasInput | undefined;
}
