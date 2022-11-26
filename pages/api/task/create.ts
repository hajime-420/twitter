import { prisma } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handleCreate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.tweet.create({
    data: {
      name: req.body.name,
    },
  });
  res.json(result);
}
