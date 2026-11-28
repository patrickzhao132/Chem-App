import type { IClassesDetail } from "./IClassesDetail.js";

export interface IClassesDetailRepository {

    getByID(
        classID: string
    ): Promise<IClassesDetail | null>;

    getByCourseCode(
        courseCode: string
    ): Promise<IClassesDetail | null>;

    getByInstructorID(
        instructorID: string
    ): Promise<IClassesDetail[]>;

    create(
        classDetails: IClassesDetail
    ): Promise<IClassesDetail>;

    update(
        classDetails: IClassesDetail
    ): Promise<IClassesDetail>;

    delete(
        classID: string
    ): Promise<boolean>;
}