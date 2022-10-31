import { EnumRoleFieldUpdateOperationsInput } from "../inputs/EnumRoleFieldUpdateOperationsInput";
import { FacturaUpdateManyWithoutClienteNestedInput } from "../inputs/FacturaUpdateManyWithoutClienteNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutProfileInput {
    email?: StringFieldUpdateOperationsInput | undefined;
    nombre?: NullableStringFieldUpdateOperationsInput | undefined;
    role?: EnumRoleFieldUpdateOperationsInput | undefined;
    facturas?: FacturaUpdateManyWithoutClienteNestedInput | undefined;
}
