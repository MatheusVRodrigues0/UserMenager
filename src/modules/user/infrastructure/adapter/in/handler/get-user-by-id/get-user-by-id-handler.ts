import { FastifyPluginAsync, FastifyRequest } from "fastify";
import { UserRequestParamsIdSchema, UserResponseSchema } from "../user-hendler-dto";
import { applicationModule } from "../../../../../application/application-module";
import { Params } from "../../dto/fastify-params-dto";

export const getUserByIdGetRoute: FastifyPluginAsync = async (fastify) => {
  fastify.get(
    ":id",
    {
      schema: {
        tags: ["Users"],
        summary: "Cria um novo usuário",
        params: UserRequestParamsIdSchema,
        response: {
          200: UserResponseSchema,
        },
      },
    },
    async (request: FastifyRequest<{Params: Params}>, reply) => {
      try {
          const user = await applicationModule.getAllUserById.execute(request.params.id);
          reply.code(200).send(user);
        } catch (error) {
          reply.send(error);
        }
    }
  );
};