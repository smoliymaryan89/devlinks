import { Request, Response, NextFunction } from "express";
import { env, HttpError } from "../utils";
import { ctrlWrapper } from "../decorators";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { User as IUser } from "../models/User";

interface AuthenticatedRequest extends Request {
  user?: IUser;
}

const JWT_SECRET = env("JWT_SECRET");

const authenticate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    throw HttpError(401, "Not authorized");
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET) as JwtPayload;

    const user = await User.findById(id);
    if (!user || !user.token) {
      throw HttpError(401, "Not authorized");
    }

    req.user = user;
    next();
  } catch {
    next(HttpError(401, "Not authorized"));
  }
};

export default ctrlWrapper(authenticate);
