import { Pago } from "./pago";

export interface PagoRepository{
    addPago(id_tarjeta:number,beneficiario:string,noTarjeta:number,cvv:string):Promise<Pago | null>;
}