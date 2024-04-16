import mongoose, { Schema, model, Document, Types } from "mongoose";
import { IRestaurant } from "./restaurants.modal";

export interface IChef extends Document {
  name: string;
  image: string;
  description: string;
  isChefOfTheWeek: boolean;
  restaurants: IRestaurant[];
}

const chefSchema = new Schema<IChef>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  isChefOfTheWeek: { type: Boolean, required: false },
  restaurants: [
    { type: Schema.Types.ObjectId, ref: "Restaurant", required: true },
  ],
});

const Chef = mongoose.model<IChef>("Chef", chefSchema);

export default Chef;
