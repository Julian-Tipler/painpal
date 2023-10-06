import { getClient } from "../index.js";

export const sales = async () => {
  const client = getClient();
  await client.connect();
  const database = client.db("develop");
  const collection = database.collection("sales");
  const results = await collection.findOne();
  console.log(results);
  return [results];
};
