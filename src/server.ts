import Fastify from "fastify";
import mongoose from "mongoose";
import  dotenv  from "dotenv";
import { jwtPlugin } from "./plugins/fastify-jwt-auth";
import { routes as userRoutes } from "./modules/user/infrastructure/adapter/in/routes-user";


const fastify = Fastify({logger: true});
dotenv.config();
//import plugins 
fastify.register(jwtPlugin);

//import routes
fastify.register(userRoutes);

//Connecting dataBase
mongoose.connect(String(process.env.MONGODB_URL),)
  .then(()=> console.log("connected in database"))
  .catch((error)=> console.log(`Error: ${error}`))

//Start server
const start = async function(){
  try {
    const PORT = Number(process.env.PORT) || 3000;
    await fastify.listen({port: PORT});
    fastify.log.info('Server start in port ' + PORT);
  } catch (error) {
    fastify.log.error(error); 
  }
}

start();

//encrypt and decrypt password
//tranferencia de dados dentro da entidade
//create and update
//quando eu vou salvar um user eu recebo os dados da controler em um IUserCreate, eu instancio a entidade user, ai eu passo a entidade user a infraestrutura, na infra eu tenho que alterar para o padrão do banco de dados pois a entidades possui methodos, ai no retorno eu envio a entidade
//quando eu vou fazer um update em um usuario, eu instancio uma entidade com os dados antigos e depois eu altero os dados passados na entidade e depois eu passo a entidade para a infra