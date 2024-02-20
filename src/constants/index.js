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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  python,
  c,
  dart,
  flutter,
  welkin,
  boys,
  kongu,
  logo,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
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
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
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
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "C",
    icon: c,
  },
];

const experiences = [
  {
    title: "Studied upto 10th Standard",
    company_name: "S.R.M Welkin Educational Trust Sopore",
    icon: welkin,
    iconBg: "#383E56",
    date: "March 2013 - December 2018",
    points: [
      "I joined SRM Welkin in 3rd Standard and from there my journey started",
      "In SRM Welkin they not only focus on the academics but also the extra curricular activities which gave me a lot of exposure and helped me to decide my future",
      "In 2014, devastating floods struck Jammu and Kashmir, including Sopore, leading to widespread destruction and displacement, followed by mass promotion to mitigate educational disruptions.  Subsequently, in 2016, Kashmir experienced widespread boycotts and protests, disrupting school schedules and creating tension",
      "Despite the hardships, schools like SRM Welkin remained resilient, with dedicated teachers and the perseverance of students fostering solidarity and camaraderie, enabling them to navigate through turbulent times together.",
      "I have had my best of the best friends from this school only",
    ],
  },
  {
    title: "Studied 11th & 12th standard",
    company_name: "Govt. Boys Higher Secondary School Sopore",
    icon: boys,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - Feb 2020",
    points: [
      "I joined Govt Boys Higher Secondary School Baramulla beacuse of the deep love for computers.They offered Computer Science as a subject which was not in my nearest Higher Secondary school",
      "I opted for Non - Medical + Computer Science but to my surprise that year roits began in Kashmir due to Article 370 and schools and colleges were closed in june and even Internet was taken out from the valley",
      "After that 2020 , Covid hits the world hard, it had only been two weeks since schools reopened in Kashmir and again we had a long vacation",
      "In these 2 years I learnt C++ but not upto the level,but i was determined to learn to I joined Kongu Engineering College",
    ],
  },
  {
    title: "B.E Computer Science & Engineering",
    company_name: "Kongu Engineering College",
    icon: kongu,
    iconBg: "#383E56",
    date: "Oct 2021 - May 2025",
    points: [
      "I have learnt so many things in Kongu Engineering College that i can't recall",
      "It is one of the best colleges in Tamil Nadu and offers a wide variety of courses",
      "The curricular and extra - curricular activities are just amazing , i have leaned a lot at this college and I would like to give it back to society",
      "Participated in many events and workshops and gained enough knowledge to be industry ready.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Portfolio",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "From the starting I started to work on myself and create project that will help me land a good job",
      "I have created many project using various technologies out there.",
      "I am a passionate learner and i keep myself updated by learning new technologies and creating new projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IBank",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "https://github.com/Kaisarbhat/iBank",
  },
  {
    name: "Spotify Clone",
    description:
      "The Spotify clone is a web application crafted with HTML, CSS, and JavaScript to replicate the user interface and functionality of the popular music streaming platform.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javacript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
