import Joi from "joi";
import { emailRegexp } from "../utils";
import { AuthBody } from "../types/auth";

export const userRegisterSchema = Joi.object<AuthBody>({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required(),
});

export const userLoginSchema = Joi.object<AuthBody>({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(8).required(),
});
