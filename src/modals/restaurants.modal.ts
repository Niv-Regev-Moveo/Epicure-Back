import mongoose, { Schema, model, Document, Types } from "mongoose";
import { IChef } from "./chef.modal";
import { IDish } from "./dish.modal";

export interface IRestaurant extends Document {
  name: string;
  image: string;
  rating: number;
  chef: IChef;
  dishes: IDish[];
}

const restaurantSchema = new Schema<IRestaurant>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  chef: { type: Schema.Types.ObjectId, ref: "Chef", required: true },
  dishes: [{ type: Schema.Types.ObjectId, ref: "Dish", required: true }],
});

const Restaurant = mongoose.model<IRestaurant>(
  "restaurantSchema",
  restaurantSchema
);

export default Restaurant;
