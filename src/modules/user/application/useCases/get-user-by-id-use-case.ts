import { NotFoundError } from "../../../../error/notFoundError";
import { mapperUserEntityToUserOut } from "../mappers/user-entity-to-user-safe-mappers";
import { UserRepositories } from "../ports/user-port";


export class GetUserByIdUseCase {
  constructor(public userRepo: UserRepositories) {}
  async execute(id: string){
    const user = await this.userRepo.findById(id);
    if(!user) throw new NotFoundError('user not foud');
    return mapperUserEntityToUserOut(user);
  }
}