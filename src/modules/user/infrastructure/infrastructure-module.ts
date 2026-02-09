import { PasswordRepositoriesBcrypt } from "./adapter/out/password-port-bcypt";
import { UserRepositoriesMongoose } from "./adapter/out/user-port-mongoose";


const userRepo = new UserRepositoriesMongoose();
const passwordRepo = new PasswordRepositoriesBcrypt();
export const infrastructureModule = {userRepo, passwordRepo}