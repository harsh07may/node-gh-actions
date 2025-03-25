import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const app: Express = express();

// **** Middleware **** //

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

if (process.env.NodeEnv === "development") app.use(morgan("dev"));
if (process.env.NodeEnv === "production") app.use(helmet());

// **** Routes **** //
app.get("/", (req, res) => {
  res.json("APIs Healthy✅");
});

// app.use(paths.Base, baseRouter);

const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Express server started on port:${PORT}`));
