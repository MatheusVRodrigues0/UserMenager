import { NotFoundError } from "../../../../error/notFoundError";
import { ValidationError } from "../../../../error/validationError";
import { ICredencials, Payload } from "../dto/auth-params-dto";
import { PasswordRepositories } from "../ports/password-port";
import { UserRepositories } from "../ports/user-port";


export class AuthUserUseCase {
  constructor(private userRepo: UserRepositories, private passwordRepo: PasswordRepositories) {}

  async execute(credencials: ICredencials){
    const user = await this.userRepo.findByEmailGetDataLogin(credencials.email);
    if(!user) throw new NotFoundError('User invalid');
    const passwordUser = user.password?.getPassword();
    if(!passwordUser) throw new ValidationError('Password invalid');
    const verifyPassword = await this.passwordRepo.comparePassword(credencials.password, passwordUser);
    if(!verifyPassword) throw new ValidationError('Password invalid');
    const now = new Date();
    if(!user.id) throw new ValidationError('id Invalid');
    const payload: Payload = {
      idUser: user.id,
      expire: new Date(now.getTime() + 15 * 60 * 1000),
      role: user.role
    }
    return payload
  }
}