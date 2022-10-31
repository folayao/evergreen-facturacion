import { UserCreateNestedOneWithoutProfileInput } from "../inputs/UserCreateNestedOneWithoutProfileInput";
export declare class ProfileCreateInput {
    bio: string;
    user: UserCreateNestedOneWithoutProfileInput;
}
