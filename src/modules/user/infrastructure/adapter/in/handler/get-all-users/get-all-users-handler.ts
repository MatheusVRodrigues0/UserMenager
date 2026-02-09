import { FastifyPluginAsync } from "fastify";
import { GetAllUsersResponseSchema } from "./get-all-users-dto";
import { applicationModule } from "../../../../../application/application-module";

export const getAllUsersGetRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get( 
    "",
    {
      schema: {
        tags: ["Users"],
        summary: "Cria um novo usuário",
        response: {
          200: GetAllUsersResponseSchema,
        },
      },
    },
    async (request, reply) => {
      try {
        const users = await applicationModule.getAllUsersUseCase.execute();
        console.log(users);
        reply.code(200).send(users)
      } catch (error) {
        reply.send(error);
      }
    }
  );
};