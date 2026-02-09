import { NotFoundError } from "../../../../error/notFoundError";
import { IUserUpdate } from "../dto/user-params-dto";
import { mapperUserEntityToUserOut } from "../mappers/user-entity-to-user-safe-mappers";
import { UserRepositories } from "../ports/user-port";

export class UpdateUserUseCase{
  constructor(public userRepo: UserRepositories) {}
  async execute(id: string, dataUserUpdate: IUserUpdate){
    const user = await this.userRepo.findById(id);
    if(!user) throw new NotFoundError('user not found');
    user['name'] = dataUserUpdate.name ? dataUserUpdate.name: user.name;
    user['role'] = dataUserUpdate.role ? dataUserUpdate.role: user.role;
    const userN = await this.userRepo.update(id, user);
    if(!userN) throw new NotFoundError('user not found');
    return mapperUserEntityToUserOut(userN);
  }
}