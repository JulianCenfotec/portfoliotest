import {IEducation, IExperience, IProject, ITech} from "../interfaces";

export const data:ITech[] = [
  {
    techIcon:"fa-brands fa-angular",
    techName:"Angular 17",
    techCategory:"Front-end Framework",
  },
  {
    techIcon:"fa-brands fa-bootstrap",
    techName:"Bootstrap",
    techCategory:"Front-end Framework",
  },
  {
    techIcon:"fa-solid fa-leaf",
    techName:"SpringBoot",
    techCategory:"Back-end Framework",
  },
  {
    techIcon:"fa-solid fa-hashtag",
    techName:"C#",
    techCategory:"Language",
  },
  {
    techIcon:"fa-brands fa-js",
    techName:"Javascript",
    techCategory:"Language",
  },
  {
    techIcon:"fa-brands fa-java",
    techName:"Java",
    techCategory:"Language",
  },
  {
    techIcon:"fa-solid fa-database",
    techName:"MySQL",
    techCategory:"Database",
  },
  {
    techIcon:"fa-solid fa-database",
    techName:"MSQL Server",
    techCategory:"Database",
  },
  {
    techIcon:"fa-solid fa-arrow-rotate-left",
    techName:"Scrum",
    techCategory:"Agile framework",
  },
  {
    techIcon:"fa-brands fa-git-alt",
    techName:"Git",
    techCategory:"Version Control System",
  }
]

export const projects:IProject[] = [
  {
    title: "Beacon",
    link:"https://github.com/MrCube23/FrontEnd-Waddle-Beacon",
    img:"https://i.imgur.com/7QxWjrb.png",
    description: "A platform for personal finance management with financial calculators, income and expense planners, and an interactive video module.",
    techs: ["Angular 17", "SpringBoot", "Bootstrap", "MySQL"]
  },
  {
    title: "MelonTickets",
    link:"https://github.com/MrCube23/BackEnd-Waddle-Beacon",
    img:"https://i.imgur.com/tLXFsqZ.png",
    description: "A refreshing web platform for buying tickets to a variety of events! With a watermelon-inspired design, our platform offers a fun and easy shopping experience.",
    techs: [".Net", "C#", "JavaScript", "Bootstrap", "MSQL Server"]
  }
]

export const education:IEducation[]=[
  { title: 'Bachelor of Software Engineering', description: 'Universidad Cenfotec', date: '2022-2025',link:"https://ucenfotec.ac.cr/Carreras/bachillerato-en-ingenieria-del-software/" },
  { title: 'Software Engineer Technician', description: 'Universidad Cenfotec', date: '2020-2022',link:"https://ucenfotec.ac.cr/Carreras/tecnico-en-ingenieria-del-software/?portfolioCats=1338" },
]

export const experience:IExperience[] = [
  {
    position: "Financial Analyst",
    company: "Cargill & GlaxoSmithKline",
    date: "2020-PRESENT",
    description: "My experience at these multinational companies has significantly strengthened my teamwork, communication, time management, and leadership skills, preparing me for a highly demanding work environment."
  }
]
