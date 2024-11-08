import { Technology } from "./Technology";

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
