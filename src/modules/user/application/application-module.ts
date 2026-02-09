import { infrastructureModule } from "../infrastructure/infrastructure-module";
import { AuthUserUseCase } from "./useCases/auth-user-use-case";
import { CreateUserUseCase } from "./useCases/create-user-use-case";
import { DeleteUserUseCase } from "./useCases/delete-user-use-case";
import { GetAllUsersUseCase } from "./useCases/get-all-users-use-case";
import { GetUserByIdUseCase } from "./useCases/get-user-by-id-use-case";
import { UpdateUserUseCase } from "./useCases/update-user-use-case";

const createUserUseCase = new CreateUserUseCase(infrastructureModule.userRepo, infrastructureModule.passwordRepo);
const getAllUsersUseCase = new GetAllUsersUseCase(infrastructureModule.userRepo);
const getAllUserById = new GetUserByIdUseCase(infrastructureModule.userRepo);
const updateUserUseCase = new UpdateUserUseCase(infrastructureModule.userRepo);
const deleteUserUseCase = new DeleteUserUseCase(infrastructureModule.userRepo);
const authUserUseCase = new AuthUserUseCase(infrastructureModule.userRepo, infrastructureModule.passwordRepo);

export const applicationModule = {createUserUseCase, getAllUsersUseCase, getAllUserById, updateUserUseCase, deleteUserUseCase, authUserUseCase}