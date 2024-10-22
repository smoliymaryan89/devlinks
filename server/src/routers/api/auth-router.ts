import express from "express";

import authController from "../../controllers/auth-controller";
import * as userSchemes from "../../validations/auth";
import { validateBody } from "../../decorators";
import { authenticate, isEmptyBody } from "../../middlewares";

const authRouter = express.Router();

const userRegisterValidate = validateBody(userSchemes.userRegisterSchema);
const userLoginValidate = validateBody(userSchemes.userLoginSchema);

authRouter.post(
  "/register",
  isEmptyBody,
  userRegisterValidate,
  authController.register
);

authRouter.post("/login", isEmptyBody, userLoginValidate, authController.login);

authRouter.post("/logout", authenticate, authController.logout);

authRouter.get("/current", authenticate, authController.current);

export default authRouter;
