import { gql } from "@apollo/client";

export const GET_SURVEY = gql`
  query GetSurvey {
    getSurvey(id: "652051820189e67b82068351") {
      _id
      title
    }
  }
`;
