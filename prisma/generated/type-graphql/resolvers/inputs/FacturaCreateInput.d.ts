import { UserCreateNestedOneWithoutFacturasInput } from "../inputs/UserCreateNestedOneWithoutFacturasInput";
export declare class FacturaCreateInput {
    createdAt?: Date | undefined;
    moneda: string;
    monto: number;
    pais: string;
    esEfectivo?: string | undefined;
    published?: boolean | undefined;
    cliente: UserCreateNestedOneWithoutFacturasInput;
}
