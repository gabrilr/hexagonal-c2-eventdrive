export class Pago{
    constructor(
        readonly id_tarjeta:number,
        readonly beneficiario:string,
        readonly noTarjeta:number,
        readonly cvv:string
    ){}
}