import { model, Schema } from "mongoose";
import { Link } from "../types/link";

const linkSchema = new Schema<Link>(
  {
    platform: {
      type: Object,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false }
);

const Link = model<Link>("link", linkSchema);

export default Link;
