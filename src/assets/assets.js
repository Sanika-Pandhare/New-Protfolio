import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';
import { FaBrain } from 'react-icons/fa';

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
    tags: ['React', 'Tailwind CSS','HTML','CSS','Javascript']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express', 'PHP']
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
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "To-Do list",
    description: "A simple To-Do List application that allows users to add, manage, and delete daily tasks. It helps users stay organized and improve productivity with an easy-to-use interface.",
    image: projectImg2,
    tech: ["React", "Tailwind CSS"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "https://github.com/Sanika-Pandhare/To-DO-list",
    code: "https://github.com/Sanika-Pandhare/To-DO-list",
  },
  {
    title: " E-Commerce Website",
    description: "Created a responsive E-Commerce web application using React and API integration, featuring dynamic product listing, product details, and shopping cart management.A mobile app for tracking workouts, nutrition, and health metrics.",
    image: projectImg3,
    tech: ["react","Tailwind CSS"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Vijay-Sport Website",
    description: "Developed a Sports E-Commerce website using React that allows users to browse sports products category-wise, search for products, view product details, add items to the cart, and manage their shopping experience through a responsive and user-friendly interface.",
    image: projectImg4,
    tech: ["react", "Tailwind CSS", "Express.js", "MongoDB"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Chat App",
    description: "A real-time chat application with group messaging, emojis, and file sharing.",
    image: projectImg5,
    tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
    icons: [FaReact, FaNodeJs, FaDatabase ],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Image Generator",
    description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
    image: projectImg6,
    tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  }
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
