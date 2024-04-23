import {IEncriptServicies } from '../../Aplicacion/services/EncriptService';
import bcrypt from 'bcrypt'

export class EncriptServiHelpers implements IEncriptServicies  {
    encodeCVV(cvv: string): Promise<string>{
        const slats = 10;
        let cvvCard = bcrypt.hash(cvv,slats);
        return cvvCard;
    }

    authCVV(cvvEncode: string, hashingCVV: string): Promise<boolean> {
        let result = bcrypt.compare(cvvEncode, hashingCVV);
        return result;
    }
}

