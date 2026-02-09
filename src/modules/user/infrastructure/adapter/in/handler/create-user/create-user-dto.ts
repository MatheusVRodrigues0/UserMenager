import { RoleSchema } from "../user-hendler-dto";

export const CreateUserRequestBodySchema = {
  type: 'object',
  properties: {
    name: { type: 'string' },
    role:  RoleSchema,
    email: { type: 'string' },
    password: { type: 'string' },
  },
  required: ["name", "role", "email", "password"],
  additionalProperties: false 
}



// import { Type } from "@Sinclair/typebox";
// import { RoleType } from "../user-hendler-dto";

// export const CreateUserRequestBodySchema = Type.Object(
//   {
//     name: Type.String(),
//     role:  RoleType,
//     email: Type.String(),
//     password: Type.String(),
//   },
//   { additionalProperties: false }
// );
