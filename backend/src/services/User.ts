import type { IUser } from "../interfaces/IUser.js";
import type { UserData } from "./UserData.js";
import type { UserAccount } from "./UserAccount.js";


export class User implements IUser {
    constructor(
        public UserData: UserData,
        public UserAccount: UserAccount
    ) {}
}