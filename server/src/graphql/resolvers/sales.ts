import { Sale } from "../../database/models/Sale.js";

export const sales = async (_, args, context) => {
  const sales = await Sale.find();
  return sales;
};
