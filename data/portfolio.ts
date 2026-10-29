// ============================================================
// SOB PLACEHOLDER INFO EKHANE — ei file-ta edit korlei pura site update hobe.
// ============================================================

export const profile = {
  name: "Moriam Chowdhury",
  designation: "Full-Stack Developer",
  tagline:
    "I'm a CSE student who enjoys building responsive web applications, solving programming problems, and turning ideas into useful digital experiences.",

  photo: "/images/photo.jpg",
  resume: "/resume.pdf",

  email: "youremail@example.com",
  phone: "+880 1XXX-XXXXXX",
  whatsapp: "8801XXXXXXXXX",

  location: "Chattogram, Bangladesh",

  socials: {
    github: "https://github.com/MoriamChowdhury",
    
   
  },
};

export const about = {
  paragraphs: [
    "Hi, I'm Moriam Chowdhury, a Computer Science and Engineering student from Bangladesh. I'm passionate about web development, problem solving, and building useful digital experiences.",

    "I enjoy creating clean, responsive, and user-friendly web applications. I'm learning modern web technologies, including HTML, CSS, JavaScript, TypeScript, React, and Next.js, while improving my programming and problem-solving skills through C and C++.",

    "I have worked on projects such as Moonix, a lunar mission simulation experience developed for the NASA Space Apps Challenge, and ShopInfinity, a women's fashion e-commerce project. I believe in continuous learning, consistency, teamwork, and turning ideas into practical projects."
  ],

  interests: [
    "Web Development",
    "Problem Solving",
    "Competitive Programming",
    "Space Exploration",
    "Learning New Technologies"
  ],
};

export const skills = [
  {
    category: "Frontend Development",
    items: [
      { name: "HTML5 & CSS3", level: 75 },
      { name: "JavaScript (ES6+)", level: 45 },
      { name: "React", level: 40 },
      { name: "Next.js", level: 30 },
      { name: "Tailwind CSS", level: 50 },
      { name: "TypeScript", level: 25 },
    ],
  },
  {
    category: "Programming & Problem Solving",
    items: [
      { name: "C", level: 70 },
      { name: "C++", level: 75 },
      { name: "Data Structures & Algorithms", level: 65 },
      { name: "Competitive Programming", level: 65 },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", level: 20 },
      { name: "MongoDB", level: 20 },
      { name: "SQL / Oracle SQL", level: 40 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 65 },
      { name: "VS Code", level: 80 },
      { name: "Vite", level: 40 },
    ],
  },
];
export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "International Islamic University Chittagong (IIUC)",
    period: "Admission Year – Present",
    detail:
      "Currently pursuing a degree in Computer Science and Engineering, with an interest in web development, programming, and problem solving.",
  },
];

// Experience na thakle ei array khali ([]) rakho — section auto lukiye jabe.
// export const experience = [
//   {
//     role: "Frontend Developer Intern",
//     company: "Your Company Name",
//     period: "Jun 2026 – Aug 2026",
//     points: [
//       "React ar Tailwind CSS diye reusable UI component toiri korechi.",
//       "Design team-er Figma file theke responsive page implement korechi.",
//       "Code review-te participate kore best practice shikhechi.",
//     ],
//   },
// ];

export type Project = {
  id: string;
  name: string;
  image: string;
  short: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
  challenges: string[];
  future: string[];
};

export const projects: Project[] = [
  {
    id: "bazardor",
    name: "Bazardor (বাজার দর)",
    image: "/images/project-1.png",
    short: "A price-tracking web app for monitoring market prices.",
    description:
      "Bazardor is a price-tracking website where users can view and compare product prices across different markets and save data by creating an account. It is a full-stack application featuring authentication, database integration, and a responsive user interface.",
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Better Auth"],
    live: " https://bajar-dor-beryl.vercel.app",
    github: "https://github.com/MoriamChowdhury/bajar-dor",
    challenges: [
      "Setting up the authentication flow for login and registration correctly.",
      "Implementing a pixel-perfect, responsive Figma design.",
      "Designing MongoDB data models and maintaining efficient data fetching performance.",
    ],
    future: [
      "Adding price history charts and trend analysis.",
      "Introducing price-drop alerts through email or notifications.",
      "Supporting both Bengali and English languages.",
    ],
  },
  {
    id: "fitlog",
    name: "FitLog",
    image: "/images/project-2.png",
    short: "An application for browsing workout libraries and exercises.",
    description:
      "FitLog is a workout library application that allows users to browse, filter, and view exercise details. It is built using Next.js App Router and TypeScript.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://b14-fitlog.vercel.app/",
    github: " https://github.com/MoriamChowdhury/b14-fitlog",
    challenges: [
      "Implementing dynamic routing and data filtering in a clean and maintainable way.",
      "Defining TypeScript types correctly.",
      "Maintaining a consistent layout across different screen sizes.",
    ],
    future: [
      "Saving personalized workout logs for individual users.",
      "Adding progress-tracking charts.",
      "Introducing a dark/light theme toggle.",
    ],
  },
  {
    id: "movie-explorer",
    name: "Movie Explorer",
    image: "/images/project-3.png",
    short: "A React application for searching movies and viewing their details.",
    description:
      "Movie Explorer is a React application that retrieves movie data from a public API and displays search results, movie cards, and a details modal. It is built using Vite and Tailwind CSS.",
    stack: ["React", "Vite", "Tailwind CSS", "REST API"],
    live: "https://sunny-maamoul-5504d6.netlify.app/",
    github: "https://github.com/MoriamChowdhury/movie-explorer",
    challenges: [
      "Handling API responses, including loading, error, and empty states.",
      "Using debouncing in search to reduce unnecessary requests.",
      "Ensuring modal accessibility and responsive behavior.",
    ],
    future: [
      "Adding a favorites list using localStorage.",
      "Implementing pagination or infinite scrolling.",
      "Introducing genre-based filtering.",
    ],
  },
];