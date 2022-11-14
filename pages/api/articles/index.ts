import { NextApiRequest, NextApiResponse } from "next";
import config from "../../../common/config";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${config.exampleApiUrl}/posts`);
  const articles = await response.json();
  res.status(200).json(articles);
}

export default handler;
