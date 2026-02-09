import { Password } from "../../../../domain/entity/password-entity";
import { User } from "../../../../domain/entity/user-entity";
import { IUserMongoose } from "../dto/user-mongoose-dto";


export function mapperUserMongoToUserEntity(userMongo: IUserMongoose): User{
  const password = userMongo.password ? new Password(userMongo.password) : undefined;
  return new User({
    id: String(userMongo._id),
    name: userMongo.name,
    email: userMongo.email,
    role: userMongo.role,
    password: password
  })
}