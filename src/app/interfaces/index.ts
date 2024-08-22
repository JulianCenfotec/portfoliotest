export interface ITech {
  techIcon: string,
  techName:string,
  techCategory:string,
}
export interface IProject {
  title: string,
  img: string,
  description: string,
  techs: string[],
}
export interface IEducation {
  title: string;
  description: string;
  date: string;
  link: string;
}
export interface IExperience {
  position: string;
  company: string;
  date: string;
  description: string;
}
