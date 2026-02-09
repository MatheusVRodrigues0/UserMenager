import { FastifyPluginAsync, FastifyRequest } from "fastify";
import { UpdateUserRequestBodySchema } from "./update-user-dto";
import { UserRequestParamsIdSchema, UserResponseSchema } from "../user-hendler-dto";
import { applicationModule } from "../../../../../application/application-module";
import { IUserUpdate } from "../../../../../application/dto/user-params-dto";
import { Params } from "../../dto/fastify-params-dto";


export const updateUserPutRoute: FastifyPluginAsync = async (fastify) => {
  fastify.put(
    ":id",
    {
      schema: {
        tags: ["Users"],
        summary: "Cria um novo usuário",
        params: UserRequestParamsIdSchema,
        body: UpdateUserRequestBodySchema,
        response: {
          200: UserResponseSchema,
        },
      },
    },
    async (request: FastifyRequest<{Body: IUserUpdate, Params: Params}>, reply) => {
      try {
        const user = await applicationModule.updateUserUseCase.execute(request.params.id, request.body);
        reply.code(200).send(user);
      } catch (error) {
        reply.send(error);
      }
    }
  );
};