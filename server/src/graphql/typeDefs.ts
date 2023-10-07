export const typeDefs = `#graphql
  type Survey {
    _id: String
    title: String
  }

  type Query {
    getSurvey(id:String): Survey
  }

  type Mutation {
    createSurvey(title: String): Survey
    updateSurvey(id: String, title: String): Survey
    deleteSurvey(id: String): String
  }
`;
