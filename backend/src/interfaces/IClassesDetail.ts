import type { IClassMember } from "./IClassesMember.js";
import type { IJoinCode } from "./IJoinCode.js";
export interface IClassesDetail {
    classId: string;
    name: string;
    description: string;
    instructorId: string;
    createdAt: Date;
    members: IClassMember[];
    activeJoinCode: IJoinCode | null;
    expiredJoinCodes: IJoinCode[];
    
}
