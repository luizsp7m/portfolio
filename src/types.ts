export type Technology = {
  id: string;
  name: string;
  slug: string;
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
  technologies: Array<Technology>;
  defaultVisible: boolean;
  pinned: boolean;
  animation: boolean;
  thumbnail: {
    url: string;
  };
}