import { IUserAccount } from "./interfaces/IUserAccount";

export class UserAccount implements IUserAccount {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public userDataId: string
    ) {}
}