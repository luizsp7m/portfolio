export type Technology = {
  id: string;
  name: string;
  defaultVisible: boolean;
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
  technologies: Technology[];
  defaultVisible: boolean;
  pinned: boolean;
  thumbnail: {
    url: string;
  };
}