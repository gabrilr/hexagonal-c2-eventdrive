import { Pago } from "./pago";

export interface PagoRepository{
    addPago(id_tarjeta:number,beneficiario:string,noTarjeta:string,cvv:string):Promise<Pago | null>;
}