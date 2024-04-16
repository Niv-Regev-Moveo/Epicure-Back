import mongoose, { Schema, model, Document, Types } from "mongoose";
import { IRestaurant } from "./restaurants.modal";

export interface IDish extends Document {
  name: string;
  image: string;
  price: number;
  tags: string[];
  ingredients: string[];
  restaurant: IRestaurant;
}

const dishSchema = new Schema<IDish>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  tags: [{ type: String }],
  ingredients: [{ type: String, required: true }],
  restaurant: [{ type: Schema.ObjectId, ref: "Restaurant", required: true }],
});

const Dish = mongoose.model<IDish>("Restaurants", dishSchema);

export default Dish;
