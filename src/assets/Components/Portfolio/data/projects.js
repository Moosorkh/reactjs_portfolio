// Import project images
import WeatherDashboardImage from "../../../../assets/weatherdashboard.png";
import MapListToggleImage from "../../../../assets/MapListToggleImage.png";
import invoiceTrackerImage from "../../../../assets/invoiceTracker.png";
import MaryEclairPatisserie from "../../../../assets/MaryEclairPatisserie.png";

export const projects = [
  {
    id: "map-toggle",
    title: "Mobile-responsive Map Search",
    description: "An interactive React application that toggles between a map view and a list view, showcasing various locations with advanced filtering capabilities and responsive design.",
    image: MapListToggleImage,
    featured: true,
    tags: ["React", "JavaScript", "Leaflet", "CSS"],
    links: {
      github: "https://github.com/Moosorkh/map-list-toggle.git",
      liveDemo: "https://map-list-toggle.vercel.app/",
    },
    color: "blue",
  },
  {
    id: "adopt-paws",
    title: "AdoptPaws - Pet Adoption",
    description: "A modern, fully responsive pet adoption web application built with React and Material UI. Features include an interactive pet browsing experience with search and filtering.",
    image: "https://i.imgur.com/xOBUOkG.jpeg",
    tags: ["React", "TypeScript", "Material UI", "Vite"],
    links: {
      github: "https://github.com/Moosorkh/adoptpaws-react.git",
      liveDemo: "https://adoptpaws-react.vercel.app/",
    },
    color: "blue",
  },
  {
    id: "invoice-tracker",
    title: "Invoice Tracker - Full Stack CRUD App",
    description: "An invoice tracking application built with the PERN Stack (PostgreSQL, Express, React, Node.js), featuring advanced CRUD operations, JWT authentication, PDF exporting, and Dockerized deployment on Railway. Use the following credentials to login: Email: \"test@test.com\" Password: \"123456\" or simply register a new account to access the app.",
    image: invoiceTrackerImage,
    tags: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Docker", "Railway"],
    links: {
      github: "https://github.com/Moosorkh/invoice-tracker.git",
      liveDemo: "https://invoice-tracker.up.railway.app/",
    },
    color: "blue",
  },
  {
    id: "mary-eclair",
    title: "Mary Éclair Pâtisserie",
    description: "A custom Shopify e-commerce store designed and developed for an upscale French-inspired bakery specializing in artisan éclairs and pastries. Features include custom theme customization, responsive design, SEO optimization, integrated contact forms, and social media integration.",
    image: MaryEclairPatisserie,
    tags: ["Shopify", "Liquid", "HTML5", "CSS3", "SEO"],
    badge: "Shopify",
    links: {
      github: null,
      liveDemo: "https://maryeclairpatisserie.myshopify.com/",
    },
    status: "Password: None",
    color: "green",
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "A full-stack weather application built with React, Material UI, NestJS, and PostgreSQL. Features include current weather data, 5-day forecasts, search history management, and dark/light theme switching. Deployed on Railway with Docker containerization.",
    image: WeatherDashboardImage,
    tags: ["React", "TypeScript", "Material UI", "NestJS", "PostgreSQL", "Prisma", "Docker", "Railway"],
    links: {
      github: "https://github.com/Moosorkh/Weather_Dashboard",
      liveDemo: "https://weatherdashboard-production-5c78.up.railway.app/",
    },
    color: "blue",
  }
];

export const upcomingProjects = [
  {
    id: "bed-reservation",
    title: "Interactive Bed Reservation",
    description: "A user-friendly drag-and-drop interface for bed reservations and swapping, significantly improving user experience and operational efficiency.",
    icon: "FaReact",
    iconColor: "#61DAFB",
    tags: ["React", "C#", "Entity Framework", "Drag-and-Drop"],
    status: "Private Repository",
    color: "blue",
  },
  {
    id: "auth-system",
    title: "Enhanced Authentication System",
    description: "Custom login features for web applications, including tailored messages and notifications for new users, enhancing user engagement and security measures.",
    icon: "SiCsharp",
    iconColor: "#239120",
    tags: ["C#", "ASP.NET", "Entity Framework", "Authentication"],
    status: "Private Repository",
    color: "blue",
  },
  {
    id: "qa-documentation",
    title: "QA & Technical Documentation",
    description: "Upcoming project focused on developing comprehensive test cases and technical documentation to support QA processes. Will include creating user guides, API documentation, and system architecture diagrams to enable efficient testing and validation for professional users and development teams.",
    icon: "FaFileAlt",
    iconColor: "#FFD700",
    tags: ["Markdown", "Swagger", "Jira", "Draw.io"],
    status: "Internal Documentation",
    color: "blue",
  },
  {
    id: "api-design",
    title: "API Design & Backend Architecture",
    description: "In-progress project developing robust RESTful APIs and backend services using C#.NET and ASP.NET Core. Will implement efficient database integration with PostgreSQL, optimize query performance, and ensure secure authentication mechanisms for a seamless user experience.",
    icon: "SiDotnet",
    iconColor: "#512BD4",
    tags: ["C#.NET", "ASP.NET", "PostgreSQL", "Entity Framework"],
    status: "Private Repository",
    color: "blue",
  },
  {
    id: "ui-improvements",
    title: "UI Enhancement Suite",
    description: "Planned project to implement over a dozen UI enhancements, applying modern design principles and frameworks. Will focus on increasing usability and aesthetic appeal using Material UI and Tailwind CSS, with emphasis on accessibility and responsive design across various devices.",
    icon: "SiMui",
    iconColor: "#007FFF",
    tags: ["Material UI", "Tailwind CSS", "ReactJS", "UX/UI Design"],
    status: "Multiple Repositories",
    color: "blue",
  },
  {
    id: "insurance-interface",
    title: "Insurance Selection Interface",
    description: "A dynamic insurance selection tool with cascading dropdown menus, where choices are saved and reflected immediately in the UI, facilitating a better user experience. Integrated with PostgreSQL database for persistent storage and real-time updates.",
    icon: "SiReact",
    iconColor: "#61DAFB",
    tags: ["React", "PostgreSQL", "Material UI", "RESTful API"],
    status: "Private Repository",
    color: "blue",
  },
  {
    id: "onboarding-tutorial",
    title: "Onboarding Tutorial System",
    description: "An interactive tutorial system for first-time users of the platform, guiding them through complex functionalities to enhance user understanding and satisfaction. Implemented using React Joyride library with custom tooltips and progress tracking.",
    icon: "FaReact",
    iconColor: "#61DAFB",
    tags: ["React", "Joyride", "CSS3", "UX Design"],
    status: "Private Repository",
    color: "blue",
  }
];

// For the "More Projects Coming Soon" section
export const comingSoonInfo = {
  title: "More Projects Coming Soon",
  description: "I'm currently working on several exciting projects that showcase my full-stack development skills with React, C#, Entity Framework, and more. Check back soon to see my latest work!",
  icons: [
    { icon: "FaReact", color: "#61DAFB", delay: 0 },
    { icon: "SiCsharp", color: "#239120", delay: 0.2 },
    { icon: "SiDotnet", color: "#512BD4", delay: 0.4 },
    { icon: "FaDocker", color: "#2496ED", delay: 0.6 }
  ]
};