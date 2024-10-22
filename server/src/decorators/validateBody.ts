import { Schema } from "joi";
import { HttpError } from "../utils";
import { Request, Response, NextFunction } from "express";

const validateBody = (schema: Schema) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) {
      return next(HttpError(400, error.message));
    }

    next();
  };

  return func;
};

export default validateBody;
