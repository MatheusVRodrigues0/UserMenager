import { UserRepositories } from "../../../application/ports/user-port";
import { User } from "../../../domain/entity/user-entity";
import { mapperUserMongoToUserEntity } from "./mappers/user-mappers";
import { UserMongo } from "./schema/user-mongoose-schema";

export class UserRepositoriesMongoose implements UserRepositories{
  async create(user: User){
    const dataUser = {
      name: user.name,
      role: user.role,
      email: user.email,
      password: user.password?.getPassword()
    }
    const userMongo = new UserMongo(dataUser);
    await userMongo.save();
    return mapperUserMongoToUserEntity(userMongo)
  }
  async findByEmail(email:string){
    const userMongo = await UserMongo.findOne({email: email});
    if(!userMongo) return null;
    return mapperUserMongoToUserEntity(userMongo);
  }
  async findByEmailGetDataLogin(email:string){
    const userMongo = await UserMongo.findOne({email: email}).select("id name email password role");
    if(!userMongo) return null;
    return mapperUserMongoToUserEntity(userMongo);
  }

  async find(){
    const users = await UserMongo.find();
    if(!users) return null;
    return users.map(element => {
      return mapperUserMongoToUserEntity(element);
    });
  }

  async findById(id: string){
    const userMongo = await UserMongo.findById(id);
    if(!userMongo) return null;
    return mapperUserMongoToUserEntity(userMongo);
  }
  async update(id: string, user: User){
    const dataUser = {
      name: user.name,
      role: user.role,
      email: user.email,
      password: user.password?.getPassword
    }
    const userMongo = await UserMongo.findByIdAndUpdate(id, dataUser, {new: true});
    if(!userMongo) return null;
    return mapperUserMongoToUserEntity(userMongo);
  }
  async delete(id: string){
    await UserMongo.findByIdAndDelete(id);
  }
  async permissionUser(idUser: string, role: User["role"]): Promise<boolean> {
    const userMongo = await UserMongo.findById(idUser);
    if(!userMongo) return false;
    if(userMongo.role !== role) return false;
    return true;
  }
}