export const AuthUserRequestBodySchema = {
  type: "object",
  properties: {
    email: { type: "string"},
    password: { type: "string" },
  },
  required: ["email", "password"],
  additionalProperties: false,
}
export const AuthUserResponseSchema = {
  type: "object",
  properties: {
    token: { type: "string"}
  },
  required: ["token"]
}


// import { Type } from "@Sinclair/typebox";

// export const AuthUserRequestBodySchema = Type.Object(
//   {
//     email: Type.String(),
//     password:  Type.String(),
//   },
//   { additionalProperties: false }
// );

// export const AuthUserResponseSchema = Type.Object(
//   {
//     token: Type.String()
//   }
// )
