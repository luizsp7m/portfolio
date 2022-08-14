export type Technology = {
  id: string;
  name: string;
  slug: string;
  logo: {
    url: string;
  }
}

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
}

export type Curriculum = {
  file: {
    url: string;
  }
}