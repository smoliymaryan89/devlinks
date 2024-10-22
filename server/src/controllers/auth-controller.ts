import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { AuthBody, CustomRequest } from "../types/auth";
import { env, HttpError } from "../utils";
import { ctrlWrapper } from "../decorators";

const JWT_SECRET = env("JWT_SECRET");

const register = async (
  req: Request<object, object, AuthBody>,
  res: Response
) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) throw HttpError(409, "Email in use");

  const hashPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
  });

  res.status(201).json({
    user: {
      email: newUser.email,
    },
  });
};

const login = async (req: Request<object, object, AuthBody>, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    token,
    user: {
      email: user.email,
      _id: user._id,
    },
  });
};

const logout = async (req: Request, res: Response) => {
  const customReq = req as CustomRequest;
  const { _id } = customReq.user;

  await User.findByIdAndUpdate(_id, { token: "" });

  res.status(204).send();
};

const current = async (req: Request, res: Response) => {
  const customReq = req as CustomRequest;
  const { email } = customReq.user;

  const currentUser = await User.findOne({ email }).select("-password");

  if (!currentUser) {
    throw HttpError(404, "User not found");
  }

  const { token, ...userData } = currentUser.toObject();

  res.json({
    user: userData,
    token,
  });
};

export default {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  current: ctrlWrapper(current),
};
