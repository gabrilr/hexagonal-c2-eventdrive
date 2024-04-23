import { Pago } from "../Dominio/pago";
import { PagoRepository } from "../Dominio/pagoRepository";
import {EncriptServiHelpers} from "../Infraestructura/helpers/EncryptHelper";
import { NotificationHelpers } from "../Infraestructura/helpers/NotificationHelper";

export class AddPagoUseCase{
    constructor(
        readonly pagoRepository:PagoRepository, 
        readonly encryCVVHelper:EncriptServiHelpers, 
        readonly notificationHelpers:NotificationHelpers
    ){}
    
    async run(id_tarjeta:number,beneficiario:string,noTarjeta:string,cvv:string):Promise<Pago | null>{
        try {
            const EncryCVV = await this.encryCVVHelper.encodeCVV(cvv);
            const PagoProcesado = await this.pagoRepository.addPago(id_tarjeta,beneficiario,noTarjeta,EncryCVV);
            if(PagoProcesado)
            this.notificationHelpers.sendNotification(PagoProcesado);
            return PagoProcesado;
        } catch (error) {
            console.log("Error en addPago.UseCase", error);
            return null;
        }
    }
}
