import { Request, Response } from "express";
import { ctrlWrapper } from "../decorators";
import { Link as LinkData, Req } from "../types/link";
import Link from "../models/Links";
import { HttpError } from "../utils";

const getAllLinks = async (req: Request, res: Response) => {
  const customReq = req as Req;

  const { _id: owner } = customReq.user;

  const result = await Link.find({ owner });

  res.json(result);
};

const createLink = async (req: Request, res: Response) => {
  const customReq = req as Req;

  const { _id: owner } = customReq.user;

  const result = await Link.create({ ...req.body, owner });

  res.status(201).json(result);
};

const deleteLink = async (req: Request, res: Response) => {
  const customReq = req as Req;

  const { _id: owner } = customReq.user;
  const { linkId } = req.params;

  const result = await Link.findOneAndDelete({ _id: linkId, owner });

  if (!result) {
    throw HttpError(404);
  }

  res.json({ message: "link deleted" });
};

const updateLinks = async (req: Request, res: Response) => {
  const customReq = req as Req;

  const { _id: owner } = customReq.user;
  const { links }: { links: LinkData[] } = req.body;

  const bulkOps = links.map(({ _id, index, platform, url }) => ({
    updateOne: {
      filter: { _id, owner },
      update: { index, platform, url },
    },
  }));

  await Link.bulkWrite(bulkOps);

  const updatedLinks = await Link.find({ owner });

  res.json({
    links: updatedLinks,
  });
};

export default {
  getAllLinks: ctrlWrapper(getAllLinks),
  createLink: ctrlWrapper(createLink),
  deleteLink: ctrlWrapper(deleteLink),
  updateLinks: ctrlWrapper(updateLinks),
};
