import { FastifyPluginAsync, FastifyRequest } from "fastify";

import { applicationModule } from "../../../../../application/application-module";
import { Params } from "../../dto/fastify-params-dto";
import { UserRequestParamsIdSchema } from "../user-hendler-dto";

export const deleteUserDeleteRoute: FastifyPluginAsync = async (fastify) => {
  fastify.delete(
    ":id",
    {
      schema: {
        tags: ["Users"],
        summary: "Cria um novo usuário",
        params: UserRequestParamsIdSchema,
        response: {
          204: {type: 'null'},
        },
      },
    },
    async (request: FastifyRequest<{Params: Params}>, reply) => {
      try {
        await applicationModule.deleteUserUseCase.execute(request.params.id);
        reply.code(204).send();
      } catch (error) {
        reply.send(error);
      }
    }
  );
};