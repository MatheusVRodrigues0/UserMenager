import { User } from "../../domain/entity/user-entity";


export interface UserRepositories {
  create(dataUser: User): Promise<User>
  find(): Promise<User[]|null>;
  findByEmail(email:string): Promise<User|null>;
  findByEmailGetDataLogin(email:string): Promise<User|null>;
  findById(id: string): Promise<User|null>;
  update(id: string, dataUser: User): Promise<User|null>;
  delete(id: string): void;
  permissionUser(idUser: string, role: User['role']): Promise<boolean>;
}