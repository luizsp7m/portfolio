import { gql } from "@apollo/client";

export const GET_PROJECTS_ON_HOMEPAGE_QUERY = gql`
  query MyQuery {
    allProjects(
      filter: { displayOnHomepage: { eq: true } }
      orderBy: createdAt_DESC
      first: "6"
    ) {
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

export const GET_LATEST_PROJECTS_QUERY = gql`
  query MyQuery {
    allProjects(orderBy: createdAt_DESC, first: "6") {
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

export const GET_TECHNOLOGIES_QUERY = gql`
  query MyQuery {
    allTechnologies(orderBy: createdAt_ASC) {
      id
      name
      slug
      logo {
        url
      }
    }
  }
`;

export const GET_TECHNOLOGY_QUERY = gql`
  query MyQuery($slug: String) {
    technology(filter: { slug: { eq: $slug } }) {
      id
      name
      slug
      logo {
        url
      }
    }
  }
`;

export const COUNT_PROJECTS_QUERY = gql`
  query MyQuery($allIn: [ItemId]) {
    _allProjectsMeta(filter: { technologies: { allIn: $allIn } }) {
      count
    }
  }
`;

export const GET_PROJECTS_QUERY = gql`
  query MyQuery($first: IntType, $skip: IntType, $allIn: [ItemId]) {
    allProjects(
      orderBy: createdAt_DESC
      first: $first
      skip: $skip
      filter: { technologies: { allIn: $allIn } }
    ) {
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

export const GET_CURRICULUM_QUERY = gql`
  query MyQuery {
    curriculum {
      file {
        url(imgixParams: {})
      }
    }
  }
`;

export const GET_ABOUT_QUERY = gql`
  query MyQuery {
    about {
      description(markdown: true)
    }
  }
`;
