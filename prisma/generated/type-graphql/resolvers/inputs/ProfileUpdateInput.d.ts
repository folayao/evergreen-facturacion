import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutProfileNestedInput } from "../inputs/UserUpdateOneRequiredWithoutProfileNestedInput";
export declare class ProfileUpdateInput {
    bio?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutProfileNestedInput | undefined;
}
