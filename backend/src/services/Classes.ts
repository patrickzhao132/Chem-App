import type { IClasses } from "../interfaces/IClasses.js";
import { ClassesData } from "./ClassesData.js";
import { ClassesDetail } from "./ClassesDetail.js";
import { JoinCode } from "./JoinCode.js";
import { ClassMember } from "./ClassesMember.js";

//business logic for classes
export class Classes implements IClasses {
    constructor(
        public ClassesData: ClassesData,
        public ClassesDetail: ClassesDetail
    ) {}
    generateJoinCode(): JoinCode {
        return new JoinCode("code", new Date(), new Date());
     }

    invalidateJoinCode(): void { }

    addStudent(member: ClassMember): void { }

    removeStudent(studentId: string): void { }

    hasStudent(studentId: string): boolean { }

    isJoinCodeValid(code: string): boolean { 
        
    }
}