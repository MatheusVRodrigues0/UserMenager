import { FastifyPluginAsync, FastifyRequest } from "fastify";
import { CreateUserRequestBodySchema } from "./create-user-dto";
import { applicationModule } from "../../../../../application/application-module";
import { UserResponseSchema } from "../user-hendler-dto";
import { IUserCreate } from "../../../../../application/dto/user-params-dto";

export const createUserPostRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    "",
    {
      schema: {
        tags: ["Users"],
        summary: "Cria um novo usuário",
        body: CreateUserRequestBodySchema,
        response: {
          201: UserResponseSchema,
        },
      },
    },
    async (request: FastifyRequest<{Body: IUserCreate}>, reply) => {
      try {
          const user = await applicationModule.createUserUseCase.execute(request.body);
          reply.code(201).send(user)
        } catch (error) {
          reply.send(error)
        }
    }
  );
};
 