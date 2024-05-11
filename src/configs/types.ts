import { IconType } from "react-icons";

export type commonArgs = {
  slug: string;
};

export type Data = {
  logo: string;
  image: string;
  title: string;
  description: string;
  data: JSX.Element;
  slug: string;
  related_posts: string[];
  tags: string[];
  category: string[];
  created_at: string;
  updated_at: string;
};

export type dataType = {
  data: Data;
  slug: string;
};

export type resultType = {
  data: Data[];
  slug: string;
};

export type profileType = {
  image: string;
  email: string;
  phone: string;
  title: string;
  name: string;
  about: string;
  location: string;
  favorites: string[];
  socials: {
    name: string;
    url: string;
    icon: IconType;
    value: string;
  }[];
};

export type resumeType = {
  personal: profileType;
  education: Data;
  experiences: Data;
  projects: Data;
  courses: Data;
  publications: Data;
};

export type resumeCommonType = {
  resume: resumeType;
  slug: string;
};
