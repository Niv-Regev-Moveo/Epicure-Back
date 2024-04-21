import express from "express";
import * as chefController from "../controllers/chef.controller";

const chefsRouter = express.Router();

chefsRouter.get("/", chefController.getAll);
chefsRouter.get("/:id", chefController.getChefById);
chefsRouter.post("/", chefController.createChef);
chefsRouter.put("/:id", chefController.updateChef);
chefsRouter.delete("/:id", chefController.deleteChef);

export default chefsRouter;
