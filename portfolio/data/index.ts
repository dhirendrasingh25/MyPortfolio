import { link } from "fs";
import { title } from "process";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];
  
export const gridItems = [
  {
    id: 1,
    title: "Participated in 6+ Hackathons & won 2",
    description: "",
    className: "lg:col-span-3  md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "",
    titleClassName: "justify-end text-center text-black text-nowrap sm:mt-4 mt-24 w-full text-[#8a00c2]",
    img: "/Collage.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Comfortable with Various Tech Ecosystems",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center ",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "SIH 2023 Institute Winner",
    description: "SIH1509 Solution to provide market access to MSME's ",
    className: "md:col-span-3 md:row-span-2 text-nowrap",
    imgClassName: "",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
  
export const projects = [
  {
    id: 1,
    title: "MultiFunctionality App",
    des: "Connect, chat, and compete with others in this versatile app featuring customizable profiles, quizzes, and seamless user interactions.",
    img: "/multifunproject.png",
    iconLists: ["/re.svg", "/nodejs.svg", "/mongodb.svg", "/redux.svg","/websocket.svg","/jwt.svg","chartjs.svg","/ui_dark.svg","leaflet.svg"],
    link: "https://multifunctionality-app.vercel.app",
  },
  {
    id: 2,
    title: "Linkup Social Media App",
    des: "Join LinkUp today – connect, share, and engage with others using email-authenticated profiles, all in a seamless, desktop-optimized social experience.",
    img: "/linkupProject.png",
    iconLists: ["/re.svg", "/nodejs.svg", "/mongodb.svg", "/nodemailer.jpeg","/jwt.svg", "/redux.svg"],
    link: "https://linkup-ds.netlify.app",
  },
  {
    id: 3,
    title: "GraphQL Crud App",
    des: "Project Management Portal, a web application where users can perform CRUD operations on clients and projects. ",
    img: "/gqlproject.png",
    iconLists: ["/re.svg","/nodejs.svg", "/mongodb.svg", "/redux.svg", "/graphhql.svg", "/ts.svg","/ui_dark.svg"],
    link: "https://github.com/dhirendrasingh25/GraphQL",
  },
  {
    id: 4,
    title: "Wetube Online Vedio Platform",
    des: "Wetube a Vedio Streaming Website made using ReactJs , Material UI 5 and RapidAPI",
    img: "/wetubeproject.png",
    iconLists: ["/re.svg","rapidapi.svg"],
    link: "https://wetube-dhirendrasingh-2023.netlify.app/",
  },
];
  
export const testimonials = [
  {
    quote:"During his business development internship, he played a pivotal role in conducting in-depth market analysis and identifying growth opportunities. His ability to design and implement strategic marketing campaigns, including email outreach, SEO, and social media, helped streamline our business initiatives and boost engagement.",
    name: "Prof. Vinayak Shete",
    title: "Director of JKB Education & IT Services",
    profile:"/vnyk.jpeg",
    linkedin:"https://www.linkedin.com/in/vinayakshetejkb/",
  },
  {
    quote:"Dhirendra’s remarkable adaptability and technical skills truly set him apart. As a key contributor to our development team, he consistently demonstrated a strong work ethic and innovative approach to problem-solving. His dedication to refining our platforms and leading critical projects has been invaluable. I highly recommend Dhirendra for any team looking for a tech-savvy leader with a passion for excellence",
    name: "Harsh Vishwakarma",
    title: "CTO of Vighnesh Inc",
    profile:"/harsh.jpeg",
    linkedin:"https://www.linkedin.com/in/harshh-vishwakarma/",
  },
  {
    quote:"Dhirendra demonstrated remarkable dedication by conducting extensive ground-level research, which played a pivotal role in laying the foundation for my new startup, SaviDurga Sarees. Their keen insights and strategic input were instrumental in shaping the business during its formative stages.",
    name: "Sudhanshu Arora",
    // title: "Chief Global Sales Officer - Sodexo Offshore",
    title: "Founder - SaviDurga Sarees | Chief Global Sales Officer - Sodexo Offshore",
    profile:"/sudhanshu.jpeg",
    linkedin:"https://www.linkedin.com/in/sudhanshu-arora-56a61347/",
  },
];
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/dhirendrasingh25"
  },
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/dhirendra-singh-846b83257/"
  },
];