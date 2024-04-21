import mongoose, { Schema, model, Document, Types } from "mongoose";
import { IRestaurantModel } from "./restaurants.model";

export interface IDishModel extends Document {
  name: string;
  image: string;
  type?: "Spicy" | "vegan" | "Vegetarian" | null;
  price: number;
  tags?: string[];
  ingredients: string[];
  restaurant: IRestaurantModel;
}

const dishSchema = new Schema<IDishModel>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  type: { type: String, required: false },
  price: { type: Number, required: true },
  tags: [{ type: String }],
  ingredients: [{ type: String, required: true }],
  restaurant: {
    type: Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
});

const Dish = mongoose.model<IDishModel>("Dish", dishSchema);

export default Dish;
