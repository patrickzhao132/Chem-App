import { IUserData } from "./interfaces/IUserData";

export class UserData implements IUserData {
    constructor(
        public id: string
    ) {}
}