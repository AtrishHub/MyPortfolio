import project1 from "../assets/projects/movie1.webp";
import project2 from "../assets/projects/uber-clone.png";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project4.webp";


export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With hands-on experience, I have honed my skills in front-end technologies like React, as well as back-end technologies like Node.js and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March 2024 - June 2024",
    role: "Front-End Developer",
    company: "Zidio Development",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js.Designed and optimized responsive UI/UX.`,
    technologies: ["HTML","CSS","Tailwind","Javascript", "React.js"],
  },
  {
    year: "Jan 2024 - April 2024",
    role: " Full Stack Development Trainee ",
    company: "Hoping Minds",
    description: `Designed and developed user interfaces for web applications using MERN Stack. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized Full Stack performance.`,
    technologies: ["HTML", "TailwindCSS", "javascript", "ReactJs","Nodejs","ExpressJs","MongoDB"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Movie Webapp",
    image: project1,
    description:
      "Developed a full-stack Movie Web App using the MERN Stack, allowing users to browse, search, and view detailed information about movies and TV shows. Integrated third-party APIs (such as TMDB or OMDB) to fetch real-time movie data and implemented JWT-based authentication for secure user login and personalized features like watchlists and favorites. Built a responsive and user-friendly frontend with React.js, optimized performance with lazy loading and search filters, and designed a scalable backend with Node.js, Express.js, and MongoDB.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link:"https://github.com/AtrishHub"
  },
  {
    title: "UBER-Clone",
    image: project2,
    description:
      "Built a real-time ride booking app using MERN Stack, Socket.IO, and Google Maps API for live location tracking. Developed secure RESTful APIs with JWT authentication and optimized database operations with MongoDB. Enabled real-time ride updates and designed a responsive, dynamic frontend using React.js and WebSocket communication.",
    technologies: ["Reactjs", "Tailwind", "Node.js", "Mongodb","express.js","webSocket"],
    link:"https://github.com/AtrishHub"
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  //   link:"https://www.instagram.com/atrish_pandit_/?hl=en"
  // },
  {
    title: "Burger-Builder",
    image: project4,
    description:
      "This project is an interactive burger customization and ordering platform where users can create their perfect burger from scratch. Customers can select ingredients like buns, patties, cheese, sauces, and toppings, seeing a real-time preview of their customized burger before placing an order.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    link:"https://github.com/AtrishHub"
  },
];

export const CONTACT = {
  address: "Kaithal, Haryana, India, 136026 ",
  phoneNo: "+91 7027043637 ",
  email: "gunjanatrish32@gmail.com",
};
