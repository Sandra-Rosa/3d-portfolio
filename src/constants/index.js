import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
    }
  ];
  
  const experiences = [
    {
      title: "Junior Wordpress Developer",
      company_name: "The Xtruder",
      iconBg: "#383E56",
      date: "April 2023 - present",
      points: [
        "Contributing to the development and customization of websites",
        "Successfully collaborated on projects for clients such as Allabeeb, and Unicraft.",
        "Proficient in using WordPress tools like Elementor and WPBakery to create visually appealing and interactive web pages.",
        "Demonstrated ability to work within project deadlines and effectively communicate with team members."
      ],
    },
    {
      title: "Front End Developer",
      company_name: "GTech µLearn",
      iconBg: "#E6DEDD",
      date: "Nov 2022-Apr 2023",
      points: [
        "As an intern in web development using JavaScript , I had the opportunity to gain valuable experience working with a web development team.", 
        "I was able to learn how to develop user-friendly and responsive websites using React JS."
      ],
    },
    {
      title: "Coding Tutor",
      company_name: "Codekaroyaaro",
      iconBg: "#383E56",
      date: "Oct 2022 - Apr 2023",
      points: [
        "Introduced Scratch, code.org platforms for kids below age of 15","Tutored python basics for 8+ students."
      ],
    },
    {
      title: "Teaching Learning Facilitator",
      company_name: "TinkerHub Foundation",
      iconBg: "#E6DEDD",
      date: "Oct 2022- Apr 2023",
      points: [
        "As a TLF, I have been responsible for providing guidance and support to 500+ students in Programming using JavaScript."
      ],
    },
  ];
  
  // const projects = [
  //   {
  //     name: "Rock Paper Scissor Game",
  //     description:
  //       "In this game,Players can choose between rock, paper, or scissors, and the game generates a random selection to determine the outcome,Provides an engaging user experience by displaying the result of each game round.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //     ],
  //     image: carrent,
  //     source_code_link: "https://github.com/",
  //   }
  // ];
  
  export { services, technologies, experiences, projects };