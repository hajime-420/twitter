import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handleCreate(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const result = await prisma.tweet.create({
    data: {
      content: req.body.name,
    },
  });
  res.json(result);
}
