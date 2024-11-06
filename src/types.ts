export type Technology = {
  id: string;
  name: string;
  slug: string;
  logo: {
    url: string;
  };
};

export type Project = {
  id: string;
  title: string;
  description: string;
  deploy: string;
  repository: string;
  technologies: Array<Technology>;
  thumbnail: {
    url: string;
  };
};

export type Curriculum = {
  file: {
    url: string;
  };
};

export type About = {
  description: string;
};

export type GetLatestProjectsResponse = {
  allProjects: Array<Project>;
};

export type GetTechnologiesResponse = {
  allTechnologies: Array<Technology>;
};

export type GetTechnologyResponse = {
  technology: Technology;
};

export type CountProjectsResponse = {
  _allProjectsMeta: {
    count: number;
  };
};

export type GetProjectsResponse = {
  allProjects: Array<Project>;
};

export type GetCurriculumResponse = {
  curriculum: Curriculum;
};

export type GetAboutResponse = {
  about: About;
};
