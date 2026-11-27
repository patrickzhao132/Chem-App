import type { IUserAccount } from "./interfaces/IUserAccount.js";
// due to this being a node.js project & the esueing tsconfig settings, the import statement above must include the .js extension in order to avoid a runtime error when the compiled js file is executed. This is because the tsconfig.json file has "module": "ESNext" and "target": "ESNext" settings, which means that the compiled js files will be treated as ES modules, and therefore require the .js extension in import statements.
//this is ture despite the fact that the IUserAccount interface is defined in a .ts file, because the compiled js file will be in the same directory as the .ts file.
export class UserAccount implements IUserAccount {
    constructor(
        public AccountId: string,
        public name: string,
        public email: string,
        public userDataId: string,
        public role: string
    ) {}
}