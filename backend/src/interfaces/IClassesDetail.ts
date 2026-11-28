import type { IClassMember } from "./IClassesMember.js";
import type { IJoinCode } from "./IJoinCode.js";
export interface IClassesDetail {
    classId: string;
    name: string;
    description: string;
    InstructorId: string;
    CreatedAt: Date;
    ClassesDataID: string;
    members: IClassMember[];
    joinCode: IJoinCode;
    expiredJoinCodes: IJoinCode[];
    
}
