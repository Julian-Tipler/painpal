export const typeDefs = `#graphql
  type Book {
    _id: String
    title: String
    author: String
  }

  type Sale {
    _id: String
    item: String
    price: Int
    quantity: Int
  }

  type Query {
    books: [Book]
    sales: [Sale]
  }
`;
