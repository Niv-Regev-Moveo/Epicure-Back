import { Request, Response } from "express";
import RestaurantHandler from "../handlers/restaurants.handler";

export const getAll = async (req: Request, res: Response) => {
  try {
    const restaurants = await RestaurantHandler.getAll();
    res.json(restaurants);
    console.log(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Error: An unexpected error occurred" });
  }
};

export const getRestaurantById = async (req: Request, res: Response) => {
  try {
    const restaurantId = req.params.id;
    const restaurant = await RestaurantHandler.getRestaurantById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ message: "Error: An unexpected error occurred" });
  }
};

export const createRestaurant = async (req: Request, res: Response) => {
  try {
    const newRestaurant = await RestaurantHandler.createRestaurant(req.body);
    console.log(req.body);
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ message: "Error: An unexpected error occurred" });
  }
};

export const updateRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurantId = req.params.id;
    const updatedRestaurantData = req.body.updatedRestaurantData;

    console.log("Restaurant ID:", restaurantId);
    console.log("Updated restaurant Data:", updatedRestaurantData);

    const updateRestaurant = await RestaurantHandler.updateRestaurant(
      restaurantId,
      updatedRestaurantData
    );
    console.log(updatedRestaurantData);

    if (!updatedRestaurantData) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error: An unexpected error occurred" });
  }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
  try {
    const restaurantId = req.params.id;
    const deletedRestaurant = await RestaurantHandler.deleteRestaurant(
      restaurantId
    );
    if (!deletedRestaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    console.log(deleteRestaurant);
    res.json(deletedRestaurant);
  } catch (error) {
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};
