import { ValidationError } from "../../../../error/validationError";
import { Password } from "../../domain/entity/password-entity";
import { User } from "../../domain/entity/user-entity";
import { IUserCreate, IUserSafe } from "../dto/user-params-dto";
import { mapperUserEntityToUserOut } from "../mappers/user-entity-to-user-safe-mappers";
import { PasswordRepositories } from "../ports/password-port";
import { UserRepositories } from "../ports/user-port";

export class CreateUserUseCase {
  constructor(private userRepo: UserRepositories, private passwordRepo: PasswordRepositories) {}

  async execute(dataUser: IUserCreate):Promise<IUserSafe> {
    const exist = await this.userRepo.findByEmail(dataUser.email);
    if(exist) throw new ValidationError('Email cadastred');
    const password = Password.create(dataUser.password);
    const rawPassword = password.getPassword();
    if(!rawPassword) throw new ValidationError('Password invalid');
    const passwordHash = await this.passwordRepo.encryptPassword(rawPassword)

    const user = new User({
      name: dataUser.name,
      role: dataUser.role,
      email: dataUser.email,
      password: new Password(passwordHash)
    });
    const userN = await this.userRepo.create(user);
    return mapperUserEntityToUserOut(userN);
  }
}