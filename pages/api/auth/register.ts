import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { user } = req.body;

    const createdUser = await prisma.user.create({
      data: user
    });

    res.status(200).json(createdUser);
  } catch (error) {
    res.status(400).json("User not created")
  }
}