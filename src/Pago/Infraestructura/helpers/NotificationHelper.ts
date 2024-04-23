import { INotificationService } from "../../Aplicacion/services/NotificationService";
import ampqlib from "amqplib"
import { Pago } from "../../Dominio/pago";


export class NotificationHelpers implements INotificationService {

    provideChannel : ampqlib.Channel | undefined;

    async inicializar () {
        try {
            const connection = await ampqlib.connect("amqp://guest:guest@50.16.171.248")
            this.provideChannel = await connection.createChannel()
            console.log("Conexion exitosa"); 
            return true
        } catch (error) {
            console.log("Error en el archivo NotificationHelper",error)
            return false
        }
        
    }

    sendNotification(pagoProcesado: Pago): boolean {
        if(this.provideChannel === undefined) {
            return false
        }
        const exchange = "colaGabo";
        //revisa que exista y que los datos existan
        console.log(JSON.stringify(pagoProcesado.noTarjeta));
        
        this.provideChannel.assertExchange(exchange, 'direct', {durable:true});
        this.provideChannel.publish(exchange, 'gabo', Buffer.from(JSON.stringify(pagoProcesado.noTarjeta)));
        console.log("Mensaje enviado al exchange");
        return true;
    }
}