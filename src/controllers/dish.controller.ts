import { Request, Response } from "express";
import DishHandler from "../handlers/dishes.handlers";

export const getAll = async (req: Request, res: Response) => {
  try {
    const dishes = await DishHandler.getAll();
    res.json(dishes);
  } catch (err) {
    console.error("Error getting dishes:", err);
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};

export const getDishById = async (req: Request, res: Response) => {
  try {
    const dishId = req.params.id;
    const dish = await DishHandler.getDishById(dishId);
    if (!dish) {
      return res.status(404).json({ message: "Dish not found" });
    }
    res.json(dish);
  } catch (error) {
    console.error("Error getting dish by ID:", error);
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};

export const createDish = async (req: Request, res: Response) => {
  try {
    console.log("dish controller");
    const newDish = await DishHandler.createDish(req.body);
    console.log(newDish);
    res.status(201).json(newDish);
  } catch (error) {
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};

export const updateDish = async (req: Request, res: Response) => {
  try {
    const dishId = req.params.id;
    const updatedDishData = req.body.updatedDishData;

    const updatedDish = await DishHandler.updateDish(dishId, updatedDishData);

    if (!updatedDish) {
      return res.status(404).json({ message: "Dish not found" });
    }

    res.status(201).json(updatedDish);
  } catch (error) {
    res.status(500).json({ message: "Error: An unexpected error occurred" });
  }
};

export const deleteDish = async (req: Request, res: Response) => {
  try {
    const dishId = req.params.id;
    const deletedDish = await DishHandler.deleteDish(dishId);

    if (!deletedDish) {
      return res.status(404).json({ message: "Dish not found" });
    }

    res.status(201).json(deletedDish);
  } catch (error) {
    console.error("Error deleting dish:", error);
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};
