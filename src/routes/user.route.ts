import express, { Request, Response } from "express";

const router = express.Router();

const a = "";

router.get("/", (_: Request, res: Response) => {
  res.json({ message: "User route working" });
});

export default router;
