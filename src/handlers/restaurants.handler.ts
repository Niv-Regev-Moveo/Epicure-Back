import Chef from "../models/chef.model";
import Restaurant, { IRestaurantModel } from "../models/restaurants.model";

const RestaurantHandler = {
  async getAll(): Promise<IRestaurantModel[]> {
    const restaurants = await Restaurant.find()
      .populate("chef")
      .populate("dishes");
    return restaurants;
  },

  async getRestaurantById(
    restaurantId: string
  ): Promise<IRestaurantModel | null> {
    const restaurant = await Restaurant.findById(restaurantId);
    return restaurant;
  },

  async createRestaurant(
    restaurantData: IRestaurantModel
  ): Promise<IRestaurantModel> {
    try {
      const newRestaurant = new Restaurant(restaurantData);
      const savedRestaurant = await newRestaurant.save();
      const populatedRestaurant = await savedRestaurant.populate("chef");

      await Chef.findByIdAndUpdate(
        populatedRestaurant.chef,
        { $push: { restaurants: populatedRestaurant._id } },
        { new: true, useFindAndModify: false }
      );

      return populatedRestaurant;
    } catch (error) {
      console.error("Error creating restaurant:", error);
      throw error;
    }
  },

  async updateRestaurant(
    restaurantId: string,
    updatedRestaurantData: Partial<IRestaurantModel>
  ): Promise<IRestaurantModel | null> {
    let updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      updatedRestaurantData,
      {
        new: true,
      }
    );
    if (!updatedRestaurant) {
      return null;
    }
    return updatedRestaurant;
  },

  async deleteRestaurant(
    restaurantId: string
  ): Promise<IRestaurantModel | null> {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(restaurantId);
    return deletedRestaurant;
  },
};

export default RestaurantHandler;
