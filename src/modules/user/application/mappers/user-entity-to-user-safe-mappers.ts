
import { User } from "../../domain/entity/user-entity";
import { IUserSafe } from "../dto/user-params-dto";

export function mapperUserEntityToUserOut(user: User): IUserSafe{
  if(!user.id) throw new Error('Return user Entity invalid');
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role
  }
}