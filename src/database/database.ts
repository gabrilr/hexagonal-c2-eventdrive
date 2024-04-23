import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import Pago from "../Pago/Infraestructura/Model/pago";

dotenv.config();

export const sequelize = new Sequelize({
    dialect:"mysql",
    database:process.env.DB,
    username: process.env.USER, 
    password: process.env.PASSWORD,
    host:process.env.HOST,
    port:3306,
    models:[Pago]
});

export async function correrBaseDatos(){
    try {
        await sequelize.authenticate();
        console.log("Conexión lograda");
        await sequelize.sync({force:false});
    } catch (error) {
        console.log("No se puede conectar a la base de datos", error);
    }
}