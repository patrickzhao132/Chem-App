import type { IClasses } from "../interfaces/IClasses.js";
import type { ClassesData } from "./ClassesData.js";
import type { ClassesDetail } from "./ClassesDetail.js";

export class Classes implements IClasses {
    constructor(
        public ClassesData: ClassesData,
        public ClassesDetail: ClassesDetail
    ) {}
}