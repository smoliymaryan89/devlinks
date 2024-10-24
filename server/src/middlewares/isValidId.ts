import { HttpError } from "../utils";
import { isValidObjectId } from "mongoose";
import { Request, Response, NextFunction } from "express";

const isValidId = (req: Request, res: Response, next: NextFunction) => {
  const idParams = Object.keys(req.params);

  for (const param of idParams) {
    const id = req.params[param];

    if (!isValidObjectId(id)) {
      return next(HttpError(404, `${id} is not a valid id`));
    }
  }

  next();
};

export default isValidId;
