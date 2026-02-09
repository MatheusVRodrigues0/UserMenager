import { FastifyPluginAsync, FastifyRequest } from "fastify";
import { AuthUserRequestBodySchema, AuthUserResponseSchema } from "./auth-user-dto";
import { applicationModule } from "../../../../../application/application-module";
import { ICredencials } from "../../../../../application/dto/auth-params-dto";
export const authUserPostRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    "auth/",
    {
      schema: {
        tags: ["Users"],
        summary: "User authention",
        body: AuthUserRequestBodySchema,
        response: {
          201: AuthUserResponseSchema,
        },
      },
    },
    async (request: FastifyRequest<{Body: ICredencials}>, reply) => {
      try {
          const payload = await applicationModule.authUserUseCase.execute(request.body);
          const token = request.server.jwt.sign({payload})
          reply.code(201).send({token})
        } catch (error) {
          reply.send(error)
        }
    }
  );
};
 