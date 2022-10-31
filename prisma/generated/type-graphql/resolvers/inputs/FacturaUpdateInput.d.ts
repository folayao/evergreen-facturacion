import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutFacturasNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFacturasNestedInput";
export declare class FacturaUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    moneda?: StringFieldUpdateOperationsInput | undefined;
    monto?: FloatFieldUpdateOperationsInput | undefined;
    pais?: StringFieldUpdateOperationsInput | undefined;
    esEfectivo?: NullableStringFieldUpdateOperationsInput | undefined;
    published?: BoolFieldUpdateOperationsInput | undefined;
    cliente?: UserUpdateOneRequiredWithoutFacturasNestedInput | undefined;
}
