import { roles } from "../../../../domain/entity/user-entity";
export const RoleSchema = {
  type: "string",
  enum: roles,
} as const;

export const UserResponseSchema = {
  type: 'object',
  properties: {
    id: { type: 'string'},
    name: {type: 'string'},
    role: RoleSchema,
    email: { type: 'string'}
  },
  additionalProperties: false
}

export const UserRequestParamsIdSchema ={
  type: 'object',
  properties: {
    id: { type: 'string' }
  },
  required: ["id"],
  additionalProperties: false 
}
// import { Type } from "@Sinclair/typebox";
// export const RoleType = Type.Union(roles.map((role) => Type.Literal(role)))

// export const UserResponseSchema = Type.Object(
//   {
//     id: Type.String(),
//     name: Type.String(),
//     role: RoleType,
//     email: Type.String(),
//   },
//   { additionalProperties: false }
// )