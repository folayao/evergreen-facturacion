import { User } from "../models/User";
export declare class Factura {
    id: number;
    createdAt: Date;
    moneda: string;
    monto: number;
    pais: string;
    esEfectivo?: string | null;
    published: boolean;
    cliente?: User;
    clienteId: number;
}
