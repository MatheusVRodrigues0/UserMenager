import { UserRepositories } from "../ports/user-port";

export class DeleteUserUseCase {
  constructor(public userRepo: UserRepositories) {}

  async execute(id: string){
    await this.userRepo.delete(id);
  }
}