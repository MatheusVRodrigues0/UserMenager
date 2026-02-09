import { FastifyInstance } from "fastify";
import { createUserPostRoute } from "./handler/create-user/create-user-handler";
import { getAllUsersGetRoute } from "./handler/get-all-users/get-all-users-handler";
import { getUserByIdGetRoute } from "./handler/get-user-by-id/get-user-by-id-handler";
import { updateUserPutRoute } from "./handler/update-user/update-user-handler";
import { deleteUserDeleteRoute } from "./handler/delete-user/delete-user-handler";
import { authUserPostRoute } from "./handler/auth-user/auth-user-handler";

export async function routes(fastify: FastifyInstance, options: any) {
  fastify.register(async (r) => {
    fastify.register(async function(fastifyprotected: FastifyInstance){
      fastifyprotected.addHook("onRequest", fastifyprotected.jwtAuth);
      fastifyprotected.register(createUserPostRoute);
      fastifyprotected.register(getAllUsersGetRoute);
      fastifyprotected.register(getUserByIdGetRoute);
      fastifyprotected.register(updateUserPutRoute);
      fastifyprotected.register(deleteUserDeleteRoute);
    });
    fastify.register(authUserPostRoute);
  }, {prefix: "/usermenager/v1/users/"})
}