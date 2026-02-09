import { UserResponseSchema } from "../user-hendler-dto";

export const GetAllUsersResponseSchema ={
  type: 'array',
  properties:{
    users: {
      type: "object",
      items: UserResponseSchema
    }
  }
}


// import { Type } from "@Sinclair/typebox";
// export const GetAllUsersResponseSchema = Type.Object(
//   {
//     users: Type.Array(UserResponseSchema)
//   }
// )