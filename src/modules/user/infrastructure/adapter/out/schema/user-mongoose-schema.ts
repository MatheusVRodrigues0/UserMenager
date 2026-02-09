import mongoose from "mongoose";
import { IUserMongoose } from "../dto/user-mongoose-dto";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true
  },
  role: {
    type: String,
    enum: ['Admin', 'User'],
    default: 'User'
  },
  password: {
    type: String,
    required: true,
    select: false
  }
})
export const UserMongo = mongoose.model<IUserMongoose>("User", UserSchema)