import express from 'express'
import { addPagoController } from '../dependencies';

export const pagoRouter = express.Router();

pagoRouter.post('/', (req, res) => {
  addPagoController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo pago.routes.ts');
    });
});

