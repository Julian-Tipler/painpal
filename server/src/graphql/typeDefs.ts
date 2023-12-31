export const typeDefs = `#graphql
  # ENUMS
  enum QuestionType {
    YES_NO
    MULTIPLE_CHOICE
    SINGLE_CHOICE
  }

  # USER
  # Inputs
  input CreateUserInput {
    username: String!
    passwordHash: String!
    roles: [String!]!
  }
  input LoginInput {
    username: String!
    passwordHash: String!
  }
  input UpdateUserInput {
    id: ID!
    username: String
    passwordHash: String
  }
  input DeleteUserInput {
    id: ID!
  }
  # Payloads
  type User {
    id: ID!
    username: String!
    passwordHash: String!
    roles: [String]!
  }


  # SURVEY
  # Inputs
  input GetSurveyInput {
    id: ID!
  }
  input CreateSurveyInput {
    title: String!
    questionsInput: [QuestionInput!]
  }
  input QuestionInput {
    text: String!
    type: QuestionType!
    options: [String!]!
  }
  input UpdateSurveyInput {
    id: ID!
    title: String
  }
  input UpdateQuestionInput {
    id: ID
    text: String
    type: QuestionType
    options: [String!]
  }
  input DeleteSurveyInput {
    id: ID!
  }
  # Payloads
  type Survey {
    id: ID!
    userId: ID!
    title: String!
    questions: [Question!]
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
    createUser(input: CreateUserInput!): User
    login(input: LoginInput!): User
    updateUser(input: UpdateUserInput): User
    deleteUser(input: DeleteUserInput): ID

    createSurvey(input: CreateSurveyInput!): Survey
    updateSurvey(input: UpdateSurveyInput): Survey
    deleteSurvey(input: DeleteSurveyInput): ID
  }
`;
