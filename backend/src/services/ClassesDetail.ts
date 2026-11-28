import type { IClassMember } from "../interfaces/IClassesMember.js";
import type { IJoinCode } from "../interfaces/IJoinCode.js";
import type { IClassesDetail } from "../interfaces/IClassesDetail.js";

export class ClassesDetail implements IClassesDetail {

    constructor(
        public classId: string,
        public name: string,
        public description: string,
        public instructorId: string,
        public createdAt: Date,
        public classesDataId: string,
        public members: IClassMember[],
        public activeJoinCode: IJoinCode | null,
        public expiredJoinCodes: IJoinCode[]
    ) {}

    getClassId(): string {
        return this.classId;
    }

    setClassId(classId: string): void {
        this.classId = classId;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string): void {
        this.description = description;
    }

    getInstructorId(): string {
        return this.instructorId;
    }

    setInstructorId(instructorId: string): void {
        this.instructorId = instructorId;
    }

    getCreatedAt(): Date {
        return this.createdAt;
    }

    getClassesDataId(): string {
        return this.classesDataId;
    }

    setClassesDataId(classesDataId: string): void {
        this.classesDataId = classesDataId;
    }

    getMembers(): IClassMember[] {
        return this.members;
    }

    setMembers(members: IClassMember[]): void {
        this.members = members;
    }

    getActiveJoinCode(): IJoinCode | null {
        return this.activeJoinCode;
    }

    setActiveJoinCode(joinCode: IJoinCode | null): void {
        this.activeJoinCode = joinCode;
    }

    getExpiredJoinCodes(): IJoinCode[] {
        return this.expiredJoinCodes;
    }

    setExpiredJoinCodes(
        joinCodes: IJoinCode[]
    ): void {
        this.expiredJoinCodes = joinCodes;
    }
}