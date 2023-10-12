export const typeDefs = `#graphql
  enum QuestionType {
    YES_NO
    MULTIPLE_CHOICE
    SINGLE_CHOICE
  }

  # INPUTS
  # Read
  input GetSurveyInput {
    id: String!
  }

  # Create
  input CreateSurveyInput {
    title: String!
    questions: [QuestionInput]
  }
  input QuestionInput {
    text: String!
    type: QuestionType!
    options: [String!]
  }

  # Update
  input UpdateSurveyInput {
    id: String!
    title: String
    questions: [QuestionInput]
  }

  # PAYLOADS
  type Survey {
    id: ID!
    title: String!
    questions: [Question]
  }
  type Question {
    id: ID!
    text: String!
    type: QuestionType!
    options: [String!]
  }

  # QUERIES AND MUTATIONS
  type Query {
    getSurvey(input:GetSurveyInput): Survey
  }
  type Mutation {
    createSurvey(input: CreateSurveyInput!): Survey
    updateSurvey(input: UpdateSurveyInput): Survey
    deleteSurvey(id: String): String
  }
`;
