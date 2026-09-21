import { 
  FaLightbulb, 
  FaPaintBrush, 
  FaCode, 
  FaReact, 
  FaServer, 
  FaMobileAlt, 
  FaTools, 
  FaNodeJs, 
  FaStripe, 
  FaVuejs, 
  FaFire, 
  FaDatabase, 
  FaCloud, 
  FaRobot, 
  FaBrain, 
  FaAngular 
} from 'react-icons/fa';

import { SiPostgresql, SiTypescript } from 'react-icons/si';
import { DiJava } from 'react-icons/di';

import profileImg from '../assets/profile.avif';
import profileImg1 from '../assets/profile1.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';


export const assets = {
    profileImg,
    profileImg1,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
];


export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'Javascript','Angular']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'PHP','Spring Boot']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'MySQL']
  },
  {
    title: 'Machine Learning',
    icon: FaBrain,
    description: 'Developing intelligent systems using machine learning algorithms for prediction, classification, and data analysis.',
    tags: ['Python', 'Machine Learning', 'Scikit-Learn', 'TensorFlow']
  },  
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub']
  }
];


export const projects = [
  {
    title: "Food-Delivery-website",
    description: "FoodHub is an online food ordering platform where users can browse foods category-wise, view food details, add items to their cart, save favorites using the like feature, and easily order their favorite meals, desserts, and drinks.",
    image: projectImg1,
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "To-Do list",
    description: "A simple To-Do List application that allows users to add, manage, and delete daily tasks. It helps users stay organized and improve productivity with an easy-to-use interface.",
    image: projectImg2,
    tech: ["React", "Tailwind CSS"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://github.com/Sanika-Pandhare/To-DO-list",
    code: "https://github.com/Sanika-Pandhare/To-DO-list",
  },
  {
    title: "E-Commerce Website",
    description: "Created a responsive E-Commerce web application using React and API integration, featuring dynamic product listing, product details, and shopping cart management.",
    image: projectImg3,
    tech: ["React", "Tailwind CSS"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Vijay-Sport Website",
    description: "Developed a Sports E-Commerce website using React that allows users to browse sports products category-wise, search for products, view product details, add items to the cart, and manage their shopping experience through a responsive and user-friendly interface.",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "Express.js", "MongoDB"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Quiz Application",
    description: "An interactive quiz platform with real-time scoring, multiple categories, and secure user data storage.",
    image: projectImg5,
    tech: ["React.js", "Spring Boot", "PostgreSQL"],
    icons: [FaReact, DiJava, SiPostgresql],
    demo: "#",
    code: "#",
  },
  {
    title: "Hospital Management System",
    description: "A patient and staff management system with appointment booking, records handling, and local data persistence.",
    image: projectImg6,
    tech: ["Angular", "TypeScript", "Local Storage"],
    icons: [FaAngular, SiTypescript, FaDatabase],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "React Developer",
    company: "Munimji's IT Solutions Pvt. Ltd.",
    duration: "Jun 2025 - Jul 2025",
    description:
      "Worked as a React Developer, actively contributing to assigned tasks with determination and sincerity under the guidance of the Project Manager.",
    color: "purple"
  },
  {
    role: "Web Development Intern",
    company: "YHills",
    duration: "Oct 2024 - Dec 2024",
    description:
      "Completed a Web Development project, building practical skills in frontend technologies and real-world application development.",
    color: "pink"
  },
];