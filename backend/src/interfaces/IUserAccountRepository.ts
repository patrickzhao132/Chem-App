import type { IUserAccount } from "./IUserAccount.js";

export interface IUserAccountRepository {
    getByID(
        userAccountID: string
    ): Promise<IUserAccount | null>;

    getByEmail(
        email: string
    ): Promise<IUserAccount | null>;

    create(
        account: IUserAccount
    ): Promise<IUserAccount>;

    update(
        account: IUserAccount
    ): Promise<IUserAccount>;

    delete(
        userAccountID: string
    ): Promise<boolean>;
}