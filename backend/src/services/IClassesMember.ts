import type { IUserAccount } from "../interfaces/IUserAccount.js";
import type { IClassMember } from "../interfaces/IClassesMember.js";

export class ClassMember implements IClassMember {
    constructor(
        public user: IUserAccount,
        public role: "student" | "instructor" | "ta"
    ) {}
}