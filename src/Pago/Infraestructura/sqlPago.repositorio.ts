import { Pago } from "../Dominio/pago";
import { PagoRepository } from "../Dominio/pagoRepository";
import PagoModel from "./Model/pago";


export class SqlPagoRepositorio implements PagoRepository{
    async addPago(id_tarjeta: number, beneficiario: string, noTarjeta: number,cvv: string): Promise<Pago | null> {
        try {
            const pagoRealizado = await PagoModel.create({id_tarjeta,beneficiario,noTarjeta,cvv});
            return new Pago(pagoRealizado.id_tarjeta, pagoRealizado.beneficiario, pagoRealizado.noTarjeta,pagoRealizado.cvv);
        } catch (error) {
            console.log("Error en sqlpago.repositorio en AddPago", error);
            return null;
        }
    }
}