import ampqblib from 'amqplib';
import { Pago } from '../../Dominio/pago';

export interface INotificationService{
    provideChannel : ampqblib.Channel | undefined;

    inicializar (): Promise<boolean>;
    sendNotification(pagoProcesado:Pago):boolean;
}   