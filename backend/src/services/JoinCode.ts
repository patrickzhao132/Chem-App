import type { IJoinCode } from "../interfaces/IJoinCode.js";

export class JoinCode implements IJoinCode {

    code: string;

    creationDate: Date;

    expirationDate: Date;

    constructor(
        code: string,
        creationDate: Date,
        expirationDate: Date
    ) {
        this.code = code;
        this.creationDate = creationDate;
        this.expirationDate = expirationDate;
    }
}