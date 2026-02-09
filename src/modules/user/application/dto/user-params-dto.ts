import { User } from "../../domain/entity/user-entity"
export interface IUserSafe{
  id: string,
  name: string,
  email: string,
  role: User['role']
}

export interface IUserUpdate{
  name: string,
  role: User['role']
  password: string
}
export interface IUserCreate{
  name: string,
  email: string,
  role: User['role'],
  password: string
}

