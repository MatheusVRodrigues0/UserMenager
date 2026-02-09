import { User } from "../../domain/entity/user-entity"

export interface Payload{
  idUser: string,
  expire: Date | string,
  role: User['role']
}

export interface ICredencials{
  email: string,
  password: string
}