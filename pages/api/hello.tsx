import { NextApiRequest, NextApiResponse } from "next";

async function getData(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);
  const { input } = body;

  const response = await fetch(`${input}`);
  const html = await response.text();

  res.json({ html });
}

export default getData;
