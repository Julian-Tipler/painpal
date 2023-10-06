export const typeDefs = `#graphql
  type Survey {
    _id: String
    title: String
  }

  type Sale {
    _id: String
    item: String
    price: Int
    quantity: Int
  }

  type Query {
    getSurvey: [Survey]
    sales: [Sale]
  }
`;
