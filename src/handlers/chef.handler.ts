import Chef, { IChefModel } from "../models/chef.model";
import { EStatus } from "../models/status.enum";

const ChefHandler = {
  async getAll(): Promise<IChefModel[]> {
    try {
      const chefs = await Chef.aggregate([
        {
          $match: { status: EStatus.ACTIVE },
        },
      ]);
      return chefs;
    } catch (error) {
      console.error("Error fetching chefs:", error);
      throw error;
    }
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
    const deletedChef = await Chef.findByIdAndUpdate(
      chefId,
      { status: EStatus },
      { new: true }
    );
    return deletedChef;
  },
};

export default ChefHandler;
