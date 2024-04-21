import { Request, Response } from "express";
import ChefHandler from "../handlers/chef.handler";

export const getAll = async (req: Request, res: Response) => {
  try {
    const chefs = await ChefHandler.getAll();
    res.json(chefs);
    console.log(chefs);
  } catch (error) {
    res.status(500).json({ message: "Error: An unexpected error occurred" });
  }
};

export const getChefById = async (req: Request, res: Response) => {
  try {
    const chefId = req.params.id;
    const chef = await ChefHandler.getChefById(chefId);
    if (!chef) {
      return res.status(404).json({ message: "Chef not found" });
    }
    res.json(chef);
  } catch (error) {
    res.status(500).json({ message: "Error: An unexpected error occurred" });
  }
};

export const createChef = async (req: Request, res: Response) => {
  try {
    const newChef = await ChefHandler.createChef(req.body);
    console.log(req.body);
    res.status(201).json(newChef);
  } catch (error) {
    res.status(500).json({ message: "Error: An unexpected error occurred" });
  }
};

export const updateChef = async (req: Request, res: Response) => {
  try {
    const chefId = req.params.id;
    const updateChefData = req.body.updateChefData;

    const updatedChef = await ChefHandler.updateChef(chefId, updateChefData);
    if (!updatedChef) {
      return res.status(404).json({ message: "Chef not found" });
    }

    res.status(201).json(updatedChef);
  } catch (error) {
    res.status(500).json({ message: "Error: An unexpected error occurred" });
  }
};

export const deleteChef = async (req: Request, res: Response) => {
  try {
    const chefId = req.params.id;
    const deletedChef = await ChefHandler.deleteChef(chefId);
    if (!deletedChef) {
      return res.status(404).json({ message: "Chef not found" });
    }
    console.log(deleteChef);
    res.json(deletedChef);
  } catch (error) {
    res.status(500).json({ message: "An unexpected error occurred" });
  }
};
