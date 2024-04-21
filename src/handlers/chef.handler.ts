import Chef, { IChefModel } from "../models/chef.model";

const ChefHandler = {
  async getAll(): Promise<IChefModel[]> {
    const chefs = await Chef.find().populate("restaurants");
    return chefs;
  },

  async getChefById(chefId: string): Promise<IChefModel | null> {
    const chef = await Chef.findById(chefId);
    return chef;
  },

  async createChef(chefData: IChefModel): Promise<IChefModel> {
    const newChef = new Chef(chefData);
    const savedChef = await newChef.save();
    console.log(savedChef);
    return savedChef;
  },

  async updateChef(
    chefId: string,
    updateChefData: Partial<IChefModel>
  ): Promise<IChefModel | null> {
    let updatedChef = await Chef.findByIdAndUpdate(chefId, updateChefData, {
      new: true,
    });

    if (!updatedChef) {
      return null;
    }

    return updatedChef;
  },

  async deleteChef(chefId: string): Promise<IChefModel | null> {
    const deletedChef = await Chef.findByIdAndDelete(chefId);
    return deletedChef;
  },
};

export default ChefHandler;
