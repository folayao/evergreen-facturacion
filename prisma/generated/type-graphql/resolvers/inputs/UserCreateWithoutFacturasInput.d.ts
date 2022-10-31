import { ProfileCreateNestedOneWithoutUserInput } from "../inputs/ProfileCreateNestedOneWithoutUserInput";
export declare class UserCreateWithoutFacturasInput {
    email: string;
    nombre?: string | undefined;
    role?: "CLIENT" | "ADMIN" | undefined;
    profile?: ProfileCreateNestedOneWithoutUserInput | undefined;
}
