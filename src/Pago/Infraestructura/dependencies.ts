import { SqlPagoRepositorio } from "./sqlPago.repositorio";

import { EncriptServiHelpers } from "./helpers/EncryptHelper";
import { NotificationHelpers } from "./helpers/NotificationHelper";

import { AddPagoUseCase } from "../Aplicacion/addPagoUseCase";
import { AddPagoController } from "./controller/addPago.controller";

export const encriptServi = new EncriptServiHelpers();
export const notificationHelpers = new NotificationHelpers();

notificationHelpers.inicializar();

export const sqlPagoRepositorio = new SqlPagoRepositorio();
export const addPagoUseCase = new AddPagoUseCase(sqlPagoRepositorio,encriptServi,notificationHelpers);
export const addPagoController = new AddPagoController(addPagoUseCase);


