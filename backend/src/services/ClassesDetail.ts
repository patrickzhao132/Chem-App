import type { IClassMember } from "../interfaces/IClassesMember.js";
import type { IJoinCode } from "../interfaces/IJoinCode.js";
import type { IClassesDetail } from "../interfaces/IClassesDetail.js";

export class ClassesDetail implements IClassesDetail {

    private _classId: string;

    private _name: string;

    private _description: string;

    private _instructorId: string;

    private _createdAt: Date;

    private _members: IClassMember[];

    private _activeJoinCode: IJoinCode | null;

    private _expiredJoinCodes: IJoinCode[];

    constructor(
        classId: string,
        name: string,
        description: string,
        instructorId: string,
        createdAt: Date,
        members: IClassMember[],
        activeJoinCode: IJoinCode | null,
        expiredJoinCodes: IJoinCode[]
    ) {
        this._classId = classId;
        this._name = name;
        this._description = description;
        this._instructorId = instructorId;
        this._createdAt = createdAt;
        this._members = members;
        this._activeJoinCode = activeJoinCode;
        this._expiredJoinCodes = expiredJoinCodes;
    }

    public get classId(): string {
        return this._classId;
    }

    public set classId(value: string) {
        this._classId = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get instructorId(): string {
        return this._instructorId;
    }

    public set instructorId(value: string) {
        this._instructorId = value;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public get members(): IClassMember[] {
        return this._members;
    }

    public set members(value: IClassMember[]) {
        this._members = value;
    }

    public get activeJoinCode(): IJoinCode | null {
        return this._activeJoinCode;
    }

    public set activeJoinCode(value: IJoinCode | null) {
        this._activeJoinCode = value;
    }

    public get expiredJoinCodes(): IJoinCode[] {
        return this._expiredJoinCodes;
    }

    public set expiredJoinCodes(value: IJoinCode[]) {
        this._expiredJoinCodes = value;
    }
}