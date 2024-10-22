import { Request } from "express";

export interface AuthBody {
  email: string;
  password: string;
}

export interface CustomRequest extends Request {
  user: {
    _id: string;
    email: string;
  };
}
