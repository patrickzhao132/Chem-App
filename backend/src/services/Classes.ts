import type { IClasses } from "../interfaces/IClasses.js";
import type { ClassesData } from "./ClassesData.js";
import type { ClassesDetail } from "./ClassesDetail.js";
import type { JoinCode } from "./JoinCode.js";
import type { ClassMember } from "./ClassMember.js";

//business logic for classes
export class Classes implements IClasses {
    constructor(
        public ClassesData: ClassesData,
        public ClassesDetail: ClassesDetail
    ) {}
    generateJoinCode(): JoinCode { }

    invalidateJoinCode(): void { }

    addStudent(member: ClassMember): void { }

    removeStudent(studentId: string): void { }

    hasStudent(studentId: string): boolean { }

    isJoinCodeValid(code: string): boolean { }
}