// IClassMember.ts
import type { IUserAccount } from "./IUserAccount.js";

export interface IClassMember {
    user: IUserAccount;
    role: "student" | "instructor" | "ta";
}