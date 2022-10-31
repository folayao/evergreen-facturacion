import { FacturaCreateNestedManyWithoutClienteInput } from "../inputs/FacturaCreateNestedManyWithoutClienteInput";
import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
export declare class UserCreateInput {
    email: string;
    nombre?: string | undefined;
    role?: "CLIENT" | "ADMIN" | undefined;
    facturas?: FacturaCreateNestedManyWithoutClienteInput | undefined;
    profile?: ProfileCreateNestedOneWithoutUserInput | undefined;
}
