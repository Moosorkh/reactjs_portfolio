// Import project images
import WeatherDashboardImage from "../../../../assets/weatherdashboard.png";
import MapListToggleImage from "../../../../assets/MapListToggleImage.png";
import invoiceTrackerImage from "../../../../assets/invoiceTracker.png";
import MaryEclairPatisserie from "../../../../assets/MaryEclairPatisserie.png";
import sweetCreations from "../../../../assets/sweetCreations.png";
import ETA from "../../../../assets/ETA.png";
import productPresenterImage from "../../../../assets/product-presenter.jpg";

export const projects = [
  {
    id: "host-guest-platform",
    title: "Host Guest - Homestay Booking Platform",
    description: "Took technical ownership of an incomplete homestay marketplace and rebuilt its core workflows with Laravel, PHP, PostgreSQL, Tailwind CSS, and AJAX. Delivered host and guest onboarding, profiles, listings, search and maps, admin operations, Stripe payments, Postmark email, internal messaging, AWS deployment, and GitHub Actions CI/CD.",
    image: "https://test.hostguest.net/assets/images/outdoors.jpg",
    featured: true,
    tags: ["Laravel", "PHP", "PostgreSQL", "Tailwind CSS", "AWS EC2", "Stripe", "Postmark", "Cloudflare", "GitHub Actions"],
    links: {
      github: "https://github.com/Host-Guest/web_app",
      liveDemo: "https://test.hostguest.net/",
    },
    color: "purple",
    badge: "Enterprise",
  },
  {
    id: "mary-karimzadeh-portfolio",
    title: "Mary's Sweet Creations.",
    description: "A fully responsive portfolio website for a professional pastry chef, featuring a custom image carousel with swipe functionality, LinkedIn-style profile modal, and smooth animations. Built with React, Material UI, and TypeScript, showcasing pastry creations with an elegant UI/UX design.",
    image: sweetCreations, // Add a screenshot of the website to your assets
    featured: true,
    tags: ["React", "TypeScript", "Material UI", "CSS", "Responsive Design"],
    links: {
      github: "https://github.com/Moosorkh/pastry-dreams", // Replace with actual GitHub repo if available
      liveDemo: "https://www.chef-mary.com/", // Replace with actual deployment URL
    },
    color: "blue",
  },
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
      liveDemo: "https://adoptpaws-react.pages.dev/",
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
  },
  {
    id: "exercise-tracking-api",
    title: "ETA - Exercise Tracking API",
    description: "A comprehensive backend API built with NestJS and PostgreSQL for tracking exercises with social features. Users can create, save, favorite, and rate exercises. Features include JWT authentication, Prisma ORM integration, and complete Swagger documentation. The API implements modern design patterns and robust error handling.",
    image: ETA,
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Swagger", "JWT"],
    links: {
      github: "https://github.com/Moosorkh/prehab-api",
      liveDemo: "https://social-media-api-production-5c29.up.railway.app/api",
    },
    color: "blue",
    icon: "SiNestjs",
    iconColor: "#E0234E",
  },
  {
    id: "product-presenter",
    title: "Dime Industries - Product Presenter",
    description: "An immersive product presentation experience for Dime Industries, featuring an age-gated landing flow, animated product storytelling, interactive flavor selection, product profiles, lab-result visualization, and responsive carousel experiences.",
    image: productPresenterImage,
    featured: true,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Interactive UI", "Cloudflare Workers"],
    links: {
      github: "https://github.com/Moosorkh/product-presenter.git",
      liveDemo: "https://product-presenter.moosorkh.workers.dev/",
    },
    color: "blue",
    badge: "Interactive",
  }
];
