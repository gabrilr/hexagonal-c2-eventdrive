import { Request, Response } from "express";
import { AddPagoUseCase } from "../../Aplicacion/addPagoUseCase";

export class AddPagoController{
    constructor(readonly addPagoUseCase:AddPagoUseCase){}
    async run(req:Request, res:Response){
        try{
            let id_tarjeta = req.body.id_tarjeta;
            let beneficiario = req.body.beneficiario;
            let noTarjeta = req.body.noTarjeta;
            let cvv = req.body.cvv;

            let pagoProcesado = await this.addPagoUseCase.run(id_tarjeta,beneficiario,noTarjeta,cvv);

            if(pagoProcesado){
                return res.status(200).send({
                    status:"success",
                    data:{
                        id_tarjeta: pagoProcesado.id_tarjeta,
                        beneficiario: pagoProcesado.beneficiario,
                        noTarjeta:pagoProcesado.noTarjeta,
                        cvv:pagoProcesado.cvv
                    },
                    message:"Tarjeta agregada correctamente."
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error registrar administrador en addPago.controller"
                })
            }
        }catch(error){
            console.log("Error en addPago.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}