export const typeDefs = `#graphql
  type Survey {
    _id: String!
    title: String!
    questions: [Question]
  }

  type Question {
    _id: String!
    text: String
    type: QuestionType
    options: [String]
  }

  enum QuestionType {
    YES_NO
    MULTIPLE_CHOICE
    SINGLE_CHOICE
  }

  # INPUTS
  input QuestionInput {
    text: String!
    type: QuestionType!
    options: [String!]!
  }

  input CreateSurveyMutation {
    title: String!
    questions: [QuestionInput]
  }

  input GetSurveyInput {
    id: String!
  }

  # QUERIES AND MUTATIONS
  type Query {
    getSurvey(input:GetSurveyInput): Survey
  }
  type Mutation {
    createSurvey(input: CreateSurveyMutation): Survey
    updateSurvey(id: String, title: String): Survey
    deleteSurvey(id: String): String
  }
`;
