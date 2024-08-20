import {IProject, ITech} from "../interfaces";

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
    img:"https://d12jofbmgge65s.cloudfront.net/wp-content/uploads/2023/10/money-transfer-apps_header.webp",
    description: "This is a project",
    techs: ["Angular 17", "SpringBoot", "Bootstrap", "MySQL"]
  },
  {
    title: "MelonTickets",
    img:"https://d12jofbmgge65s.cloudfront.net/wp-content/uploads/2023/10/money-transfer-apps_header.webp",
    description: "This is a project",
    techs: [".Net", "C#", "JavaScript", "Bootstrap", "MSQL Server"]
  }
]
