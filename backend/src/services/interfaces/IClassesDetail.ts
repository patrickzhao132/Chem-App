import type { IClassMember } from "./IClassesMember.js";

export interface IClassesDetail {
    classId: string;
    name: string;
    description: string;
    InstructorId: string;
    CreatedAt: Date;
    ClassesDataID: string;
    members: IClassMember[];
    
}
