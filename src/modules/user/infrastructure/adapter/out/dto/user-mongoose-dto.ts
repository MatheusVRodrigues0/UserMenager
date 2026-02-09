import { Document } from "mongoose"
import { User } from "../../../../domain/entity/user-entity"

export interface IUserMongoose extends Document{
  name: string,
  email: string,
  role: User['role'],
  password: string
}