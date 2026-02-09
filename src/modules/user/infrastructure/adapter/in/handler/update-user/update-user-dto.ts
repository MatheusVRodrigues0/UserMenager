import { RoleSchema } from "../user-hendler-dto";

export const UpdateUserRequestBodySchema = {
  type: 'object',
    properties: {
      name: { type: 'string' },
      role:  RoleSchema,
      password: { type: 'string' },
    },
    additionalProperties: false 
}



// import { Type } from "@Sinclair/typebox";
// import { RoleType } from "../user-hendler-dto";

// export const UpdateUserRequestParamsSchema = Type.Object(
//   {
//     id: Type.String()
//   },
//   { additionalProperties: false }
// )
// export const UpdateUserRequestBodySchema = Type.Object(
//   {
//     name: Type.String(),
//     role:  RoleType,
//     password: Type.String(),
//   },
//   { additionalProperties: false }
// )