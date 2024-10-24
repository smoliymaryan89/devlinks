import { Request } from "express";
import { Schema } from "mongoose";

export interface Platform {
  label: string;
  value: string;
  iconName: string;
  color: string;
}

export interface Link {
  _id: Schema.Types.ObjectId;
  platform: Platform;
  url: string;
  index: number;
  owner: Schema.Types.ObjectId;
}

export interface Req extends Request {
  user: {
    _id: string;
  };
}
