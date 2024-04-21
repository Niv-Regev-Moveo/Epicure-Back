import express from "express";
import * as restaurantsController from "../controllers/restaurants.controller";

const restaurantsRoute = express.Router();

restaurantsRoute.get("/", restaurantsController.getAll);
restaurantsRoute.get("/:id", restaurantsController.getRestaurantById);
restaurantsRoute.post("/", restaurantsController.createRestaurant);
restaurantsRoute.put("/:id", restaurantsController.updateRestaurant);
restaurantsRoute.delete("/:id", restaurantsController.deleteRestaurant);

export default restaurantsRoute;
