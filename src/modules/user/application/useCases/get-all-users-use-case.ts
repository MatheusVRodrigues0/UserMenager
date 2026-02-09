import { NotFoundError } from "../../../../error/notFoundError";
import { mapperUserEntityToUserOut } from "../mappers/user-entity-to-user-safe-mappers";
import { UserRepositories } from "../ports/user-port";


export class GetAllUsersUseCase {
  constructor(public userRepo: UserRepositories) {}

  async execute(){
    const users = await this.userRepo.find();
    if(!users) throw new NotFoundError('user not foud');
    return users.map((element)=> {
      return mapperUserEntityToUserOut(element);
    })
  
  }
}