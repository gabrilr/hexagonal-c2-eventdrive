import express from 'express';
import {correrBaseDatos} from './database/database';
import { pagoRouter } from './Pago/Infraestructura/routes/pago.routes';

import {Signale} from 'signale'
import helmet from 'helmet';
import cors from "cors";

const app = express();

const options = {
    secrets: ["([0-9]{4}-?)+"]
};

const signale = new Signale(options);

app.use(helmet());
app.use(express.json()); 
app.use(cors());

app.use('/pagos',pagoRouter);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // Establece el origen adecuado
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

async function iniciarServidor(){
    try {
        await correrBaseDatos();
        app.listen(3000, ()=>{
            signale.success("Servidor corriendo en el puerto 3000");
        })
    } catch (error) {
        signale.error("Error al iniciar el servidor", error);
    }
}

iniciarServidor();


