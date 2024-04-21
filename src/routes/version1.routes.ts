import { Router } from "express";
import chefsRoutes from "./chefs.routes";
import dishesRoute from "./dishes.routes";
import restaurantsRoute from "./restaurants.routes";

const v1Router = Router();

v1Router.use("/chefs", chefsRoutes);
v1Router.use("/dishes", dishesRoute);
v1Router.use("/restaurants", restaurantsRoute);

export default v1Router;
