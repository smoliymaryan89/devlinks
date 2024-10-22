import { Schema, model } from "mongoose";
import { emailRegexp } from "../utils";

export interface User {
  email: string;
  password: string;
  token?: string;
}

const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 8,
      required: true,
    },
    token: {
      type: String,
    },
  },
  { versionKey: false }
);

const User = model<User>("User", userSchema);

export default User;
