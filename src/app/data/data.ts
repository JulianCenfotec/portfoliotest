import {IEducation, IProject, ITech} from "../interfaces";

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
    img:"../assets/img/bacon.png",
    description: "A platform for personal finance management with financial calculators, income and expense planners, and an interactive video module.",
    techs: ["Angular 17", "SpringBoot", "Bootstrap", "MySQL"]
  },
  {
    title: "MelonTickets",
    img:"../assets/img/melon.png",
    description: "A refreshing web platform for buying tickets to a variety of events! With a watermelon-inspired design, our platform offers a fun and easy shopping experience.",
    techs: [".Net", "C#", "JavaScript", "Bootstrap", "MSQL Server"]
  }
]

export const education:IEducation[]=[
  { title: 'Bachelor of Software Engineering', description: 'Universidad Cenfotec', date: '2022-2025',link:"https://ucenfotec.ac.cr/Carreras/bachillerato-en-ingenieria-del-software/" },
  { title: 'Software Engineer Technician', description: 'Universidad Cenfotec', date: '2020-2022',link:"https://ucenfotec.ac.cr/Carreras/tecnico-en-ingenieria-del-software/?portfolioCats=1338" },
]
