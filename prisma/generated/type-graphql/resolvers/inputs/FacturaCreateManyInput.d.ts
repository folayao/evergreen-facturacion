export declare class FacturaCreateManyInput {
    id?: number | undefined;
    createdAt?: Date | undefined;
    moneda: string;
    monto: number;
    pais: string;
    esEfectivo?: string | undefined;
    published?: boolean | undefined;
    clienteId: number;
}
