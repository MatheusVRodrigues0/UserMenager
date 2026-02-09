import fastifyJwt from "@fastify/jwt";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import fastifyPlugin from "fastify-plugin";
import dotenv from "dotenv";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { Payload } from "../modules/user/application/dto/auth-params-dto";

dotenv.config();

export const jwtPlugin = fastifyPlugin(async function(fastify:FastifyInstance, options:any){
  if(!process.env.JWT_SECRET)throw new Error('JWT_SECRET invalid')
  fastify.register(fastifyJwt, { secret: process.env.JWT_SECRET});

  fastify.decorate("jwtAuth", async function(request:FastifyRequest, reply:FastifyReply){
    try {
      const token = await request.jwtVerify() as Payload;
      const now = new Date()
      const expireAt = new Date(token.expire)
      if(expireAt < now) throw new Error();
    } catch (error) {
      throw new UnauthorizedError('Token invalid or expired')
    }
  })
})