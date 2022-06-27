import { gql } from "@apollo/client";

export const GET_TECHNOLOGIES_PINNED_QUERY = gql`
  query MyQuery($first: IntType) {
    allTechnologies(orderBy: createdAt_ASC, filter: {pinned: {eq: "true"}, display: {eq: "true"}}, first: $first) {
      id
      name
      slug
      logo {
        url
      }
    }
  }
`;

export const GET_PROJECTS_PINNED_QUERY = gql`
  query MyQuery($first: IntType) {
    allProjects(filter: {pinned: {eq: "true"}, display: {eq: "true"}}, orderBy: createdAt_DESC, first: $first) {
      id
      title
      description
      deploy
      repository
      thumbnail {
        url
      }
      technologies {
        id
        name
        slug
        logo {
          url
        }
      }
    }
  }
`;

export const GET_COUNT_PROJECTS_QUERY = gql`
  query MyQuery($allIn: [ItemId]) {
    _allProjectsMeta(filter: {display: {eq: "true"}, technologies: {allIn: $allIn}}) {
      count
    }
  }
`;

export const GET_ALL_TECHNOLOGIES_QUERY = gql`
  query MyQuery {
    allTechnologies(filter: {display: {eq: "true"}}) {
      id
      name
      slug
      logo {
        url
      }
    }
  }
`;

export const GET_PROJECTS_BY_TECHNOLOGY = gql`
  query GET_PROJECTS_BY_TECHNOLOGY($allIn: [ItemId], $first: IntType = 9, $skip: IntType = 0) {
    allProjects(filter: {technologies: {allIn: $allIn}, display: {eq: "true"}}, orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      description
      deploy
      repository
      thumbnail {
        url
      }
      technologies {
        id
        name
        slug
        logo {
          url
        }
      }
    }
  }
`;

export const GET_TECHNOLOGY_BY_SLUG = gql`
  query MyQuery($slug: String = "") {
    allTechnologies(filter: {slug: {eq: $slug}}) {
      id
      name
      slug
      logo {
        url
      }
    }
  }
`;