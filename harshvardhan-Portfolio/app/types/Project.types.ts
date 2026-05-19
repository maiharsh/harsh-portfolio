export type Project = {
    slug: string;
    heading: string;
    subheading: string;
    image: string;
}

export type ProjectProps = {
    projectData: Project[];
}

export type ProjectData = {
  slug: string;
  heading: string;
  subheading: string;
  image: string;
  description: string;
  tech: string[];
  filler: string;
  features: string[];
  links: {
    live: string;
    github: string;
  };
};