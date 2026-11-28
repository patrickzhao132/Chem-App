/* 
import type { IUserAccountRepository } from "../interfaces/IUserAccountRepository.js";

export class UserAccountRepository
    implements IUserAccountRepository
{
    async getByID(
        userAccountID: string
    ): Promise<IUserAccount | null> {

        const { data, error } = await supabase
            .from("user_accounts")
            .select("*")
            .eq("id", userAccountID)
            .single();

        if (error) {
            return null;
        }

        return data as IUserAccount;
    }

    // Other methods...
}
 */