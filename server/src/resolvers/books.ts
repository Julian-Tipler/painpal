import { getClient } from "../index.js";

export const books = async () => {
  const client = getClient();
  const database = client.db("painpal");
  const collection = database.collection("sales");
  const results = await collection.findOne();

  return results;
};

// export const dummyBooks = [
//   {
//     title: "The Awakening",
//     author: "Kate Chopinn",
//   },
//   {
//     title: "City of Glass",
//     author: "Paul Auster",
//   },
// ]