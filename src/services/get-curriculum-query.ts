import { gql } from "@apollo/client";
import { Curriculum } from "../types/Curriculum";

export type GetCurriculumResponse = {
  curriculum: Curriculum;
};

export const GET_CURRICULUM_QUERY = gql`
  query MyQuery {
    curriculum {
      file {
        url(imgixParams: {})
      }
    }
  }
`;
