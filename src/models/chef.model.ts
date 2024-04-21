import mongoose, { Schema, model, Document, Types } from "mongoose";
import { IRestaurantModel } from "../models/restaurants.model";

export interface IChefModel extends Document {
  name: string;
  image: string;
  description: string;
  isChefOfTheWeek: boolean;
  restaurants: IRestaurantModel[];
}

const chefSchema = new Schema<IChefModel>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  isChefOfTheWeek: { type: Boolean, required: false },
  restaurants: [
    { type: Schema.Types.ObjectId, ref: "Restaurant", required: true },
  ],
});

const Chef = mongoose.model<IChefModel>("Chef", chefSchema);

export default Chef;
