// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {createRouter} from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .use(async (_req, _res, next) => {
    console.log();
    await next();
  })
  .get((_req, res) => {
    res.json({"hello": "world"})
  });

export default router.handler();
