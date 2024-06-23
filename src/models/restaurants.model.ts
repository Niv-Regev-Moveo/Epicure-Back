import mongoose, { Schema, model, Document, Types } from "mongoose";
import { IChefModel } from "../models/chef.model";
import { IDishModel } from "../models/dish.model";
import { EStatus } from "./status.enum";

export interface IRestaurantModel extends Document {
  name: string;
  image: string;
  rating: number;
  chef: IChefModel;
  dishes: IDishModel[];
  status: EStatus;
}

const restaurantSchema = new Schema<IRestaurantModel>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  chef: { type: Schema.Types.ObjectId, ref: "Chef", required: true },
  dishes: [{ type: Schema.Types.ObjectId, ref: "Dish", required: true }],
  status: {
    type: String,
    enum: EStatus,
    default: EStatus.ACTIVE,
    required: true,
  },
});

const Restaurant = mongoose.model<IRestaurantModel>(
  "Restaurant",
  restaurantSchema
);

export default Restaurant;
