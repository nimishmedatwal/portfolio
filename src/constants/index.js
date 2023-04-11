import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  Server,
  tripguide,
  threejs,
  mlsc,
  codingninja,
  microsoft,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: web,
  },
  {
    title: "Blockchain Developer",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: backend,
  },

];
const contactus=[
  {
    name: "LinkedIn",
  },
  {
    name: "Github",
  },
  {
    name: "Resume",
  },

]
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Microsoft Certified: Azure fundamentals",
    company_name: "Microsoft Azure",
    icon: microsoft,
    iconBg: "#383E56",
    date: "July 2022",
    link:"https://www.credly.com/badges/4dc2c9a0-477f-4bae-a38d-54549196fdba?source=linked_in_profile",
  },
  {
    title: "Best First year hack",
    company_name: "Microsoft Student Learn Chapter",
    icon: mlsc,
    iconBg: "#E6DEDD",
    date: "April 2022",
    link:"https://drive.google.com/file/d/1s4NfDDLQnfXC1wuxvvIcIpt9t67UmrUC/view?usp=sharing",
  },
  {
    title: "Excellence in C++",
    company_name: "Coding Ninja",
    icon: codingninja,
    iconBg: "#383E56",
    date: "Jan 2022",
    link:"http://files.codingninjas.in/certificate200229381f2b2bf6cb4dea6d88a60f9bedc9410.pdf",
  },

];


const projects = [
  {
    name: "ServerScope",
    description:
      "Developed a mobile app that enables users to monitor and manage their remote servers in real-time. It leverages Apache Kafka for server-to-mobile communication, predicts server overload and adds a load balancer to prevent downtime, and provides historical data and analytics for informed decision-making. It is a powerful tool for ensuring server uptime, reliability, and user experience from anywhere.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Rust",
        color: "pink-text-gradient",
      },
    ],
    image: Server,
    source_code_link: "https://github.com/nimishmedatwal/ServerScope",
  },
  {
    name: "BEML Connect",
    description:
      "Made a GUI based application which collects the data in an encrypted manner using a RSA cypher system that is collected by simple mobile application using a pseudo-network.This data is sent to cloud database hosted on Azure and can be decrypted by the central server.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/nimishmedatwal/Makeathon-Submisson",
  },
  {
    name: "ccExtractStoreSearch",
    description:
      "ccExtractStoreSearch is a website on which video(s) can be uploaded, processed and then searched using the subtitles in that video as keywords.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "AWS S3",
        color: "green-text-gradient",
      },
      {
        name: "Boto3",
        color: "pink-text-gradient",
      },
      {
        name: "AWS DynamoDb",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/nimishmedatwal/ccExtractStoreSearch",
  },
  {
    name: "Amogh Foundation",
    description:
      "Amogh foundation is a NGO To help under privileged children with life threatening diseases lead a healthy and better life. I designed and developed their website This NGO was Founded in 2021 under Trust Act 1882 – Regn No 1098 / 13.10.21 / UP",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/nimishmedatwal/Amogh_foundation",
  },
];

export { services, technologies, experiences, projects, contactus };
