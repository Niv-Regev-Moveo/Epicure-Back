import express from "express";
import * as dishController from "../controllers/dish.controller";

const dishesRoute = express.Router();

dishesRoute.get("/", dishController.getAll);
dishesRoute.get("/:id", dishController.getDishById);
dishesRoute.post("/", dishController.createDish);
dishesRoute.put("/:id", dishController.updateDish);
dishesRoute.delete("/:id", dishController.deleteDish);

export default dishesRoute;
