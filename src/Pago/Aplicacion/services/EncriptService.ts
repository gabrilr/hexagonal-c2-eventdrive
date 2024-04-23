export interface IEncriptServicies{
    encodeCVV(cvv: string):Promise<string>;
    authCVV(cvvEncode: string, hashingCVV: string): Promise<boolean>;
}

