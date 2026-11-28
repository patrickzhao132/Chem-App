import type { IClassesDetail } from "../interfaces/IClassesDetail.js";
import type { IClassMember } from "../interfaces/IClassesMember.js";
import type { JoinCode } from "./JoinCode.js";
export class ClassesDetail implements IClassesDetail {
    constructor(
        public classId: string,
        public name: string,
        public description: string,
        public InstructorId: string,
        public CreatedAt: Date,
        public ClassesDataID: string,
        public members: IClassMember[],
        public joinCode: JoinCode,
        public expiredJoinCodes: JoinCode[]
    ) {}
}