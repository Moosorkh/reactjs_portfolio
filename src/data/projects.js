// Import project images
import AdoptPawsImage from "../../AdoptPaws.png";
import VehicleVanguardImage from "../../VehicleVanguard.png";
import PersonalPortfolioImage from "../../portfolio_image.png";
import WeatherDashboardImage from "../../weatherdashboard.png";
import KanbanBoard from "../../KanbanBoard.png";

export const projects = [
    {
        id: 1,
        title: "Kanban Board",
        description: "The KanbanBoard application is a web-based task management tool that helps teams and individuals track tasks visually using a Kanban-style board. Users can create, edit, and manage tickets assigned to different statuses, making it easy to stay organized and productive.",
        image: KanbanBoard,
        technologies: ["TypeScript", "React", "Express", "PostgreSQL", "Sequelize", "JWT", "TailwindCSS"],
        features: [
            "Full-stack application built with TypeScript, React, and Express",
            "Features user authentication with JWT for secure access",
            "Interactive Kanban-style task management interface",
            "Database integration with PostgreSQL and Sequelize ORM",
            "Responsive design using TailwindCSS for mobile and desktop",
            "Deployed live on Render for seamless access"
        ],
        github: "https://github.com/Moosorkh/KanbanBoard",
        demo: "https://kanbanboard-esud.onrender.com/"
    },
    {
        id: 2,
        title: "Weather Dashboard",
        description: "The Weather Dashboard is a web application enabling users to search and view current weather data and a 5-day forecast for cities worldwide. Users can store their search history locally, allowing quick access to previously searched cities.",
        image: WeatherDashboardImage,
        technologies: ["TypeScript", "TailwindCSS", "Express", "OpenWeatherMap API"],
        features: [
            "Built with: TypeScript, TailwindCSS, and Express for a modern, full-stack approach",
            "Features Real-time weather data for searched cities",
            "5-day weather forecast display",
            "Persistent local storage of search history (local feature only)",
            "Tools/Languages: TypeScript, TailwindCSS, Express, OpenWeatherMap API",
            "Interactive UI with light/dark mode toggle and hover effects"
        ],
        github: "https://github.com/Moosorkh/Module-9-Challenge.git",
        demo: "https://module-9-challenge.onrender.com/"
    },
    {
        id: 3,
        title: "AdoptPaws",
        description: "AdoptPaws is a frontend E-commerce website for a pet adoption center that includes a simple shopping cart feature.",
        image: AdoptPawsImage,
        technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        features: [
            "Built a responsive E-commerce web application using HTML, CSS, and JavaScript.",
            "Implemented cart functionality stored in localStorage.",
            "Integrated cart persistence across page reloads using JavaScript.",
            "Tools/Languages: HTML5, CSS3, JavaScript, LocalStorage"
        ],
        github: "https://github.com/Moosorkh/AdoptPaws.git",
        demo: "https://adopt-paws.vercel.app/"
    },
    {
        id: 4,
        title: "VehicleVanguard",
        description: "VehicleVanguard is a command-line application that allows users to manage different types of vehicles.",
        image: VehicleVanguardImage,
        technologies: ["TypeScript", "Node.js", "Inquirer"],
        features: [
            "Designed and implemented a vehicle management system using TypeScript.",
            "Led the integration of complex vehicle-specific actions.",
            "Promoted user interaction through a dynamic set of options.",
            "Tools/Languages: TypeScript"
        ],
        github: "https://github.com/Moosorkh/vehiclevanguard.git",
        demo: null
    },
    {
        id: 5,
        title: "Personal Portfolio",
        description: "This personal portfolio was built using React and TailwindCSS. It showcases my projects, skills, and experience in a clean format.",
        image: PersonalPortfolioImage,
        technologies: ["React", "TailwindCSS", "GitHub", "Netlify"],
        features: [
            "Built using React and TailwindCSS for styling.",
            "Features responsive design and interactive hover effects.",
            "Integrates with GitHub for showcasing repositories and deployment using Netlify.",
            "Tools/Languages: React, TailwindCSS, GitHub, Netlify"
        ],
        github: "https://github.com/Moosorkh/reactjs_portfolio.git",
        demo: "#"
    }
];
