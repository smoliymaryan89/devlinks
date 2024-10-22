import { HttpError } from "../utils";
import { Request, Response, NextFunction } from "express";

const isEmptyBody = (req: Request, res: Response, next: NextFunction) => {
  if (!Object.keys(req.body).length) {
    return next(HttpError(400, "all fields empty"));
  }
  next();
};

export default isEmptyBody;
