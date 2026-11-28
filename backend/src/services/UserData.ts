import type { IUserData } from "../interfaces/IUserData.js";
//even though this class is currently a stub, it is still necessary to have it in order to satisfy the IUserData interface and allow for future expansion of user data properties.

export class UserData implements IUserData {
    constructor(
        public id: string
    ) {}
}