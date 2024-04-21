import { updateDish } from "../controllers/dish.controller";
import Dish, { IDishModel } from "../models/dish.model";
import Restaurant from "../models/restaurants.model";

const DishHandler = {
  async getAll(): Promise<IDishModel[]> {
    try {
      const dishes = await Dish.find().populate("restaurant");
      return dishes;
    } catch (error) {
      console.error("Error getting all dishes:", error);
      throw error;
    }
  },

  async getDishById(dishId: string): Promise<IDishModel | null> {
    try {
      const dish = await Dish.findById(dishId);
      return dish;
    } catch (error) {
      console.error("Error getting dish by ID:", error);
      throw error;
    }
  },

  async createDish(dishData: IDishModel): Promise<IDishModel> {
    const newDish = new Dish(dishData);
    console.log(newDish);
    const savedDish = await (await newDish.save()).populate("restaurant");

    await Restaurant.findByIdAndUpdate(
      savedDish.restaurant,
      { $push: { dishes: savedDish._id } },
      { new: true, useFindAndModify: false }
    );
    return savedDish;
  },

  async updateDish(
    dishId: string,
    updateDishData: Partial<IDishModel>
  ): Promise<IDishModel | null> {
    let updatedDish = await Dish.findByIdAndUpdate(dishId, updateDishData, {
      new: true,
    });

    if (!updatedDish) {
      return null;
    }

    return updatedDish;
  },

  async deleteDish(dishId: string): Promise<IDishModel | null> {
    try {
      const deletedDish = await Dish.findByIdAndDelete(dishId);
      return deletedDish;
    } catch (error) {
      console.error("Error deleting dish:", error);
      throw error;
    }
  },
};

export default DishHandler;
