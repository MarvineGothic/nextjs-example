import { NextApiRequest, NextApiResponse } from "next";
import config from "../../../common/config";

async function handler({ query: { id } }: NextApiRequest, res: NextApiResponse) {
  const response = await fetch(`${config.exampleApiUrl}/posts/${id}`);

  if (response.status === 200) {
    const article = await response.json();
    res.status(response.status).json(article);
  } else {
    res.status(response.status).json({ message: `Article with id ${id} not found` });
  }
}

export default handler;