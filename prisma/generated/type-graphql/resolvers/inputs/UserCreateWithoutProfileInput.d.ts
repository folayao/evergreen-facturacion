import { FacturaCreateNestedManyWithoutClienteInput } from "../inputs/FacturaCreateNestedManyWithoutClienteInput";
export declare class UserCreateWithoutProfileInput {
    email: string;
    nombre?: string | undefined;
    role?: "CLIENT" | "ADMIN" | undefined;
    facturas?: FacturaCreateNestedManyWithoutClienteInput | undefined;
}
