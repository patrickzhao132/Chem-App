import type { IClassesData } from "../interfaces/IClassesData.js";

export class ClassesData implements IClassesData {
    constructor(
        public id: string,
        public classesDetailId: string
    ) {}
}