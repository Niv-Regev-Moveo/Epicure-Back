import { Router } from "express";
import v1Router from "./version1.routes";

const apiRouter = Router();

apiRouter.use("/", v1Router);

export default apiRouter;
