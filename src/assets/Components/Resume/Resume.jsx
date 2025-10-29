import React, { useState, useEffect } from "react";
import {
  IoArrowForward,
  IoDownloadOutline,
  IoSchoolOutline,
  IoCodeSlashOutline,
  IoBusinessOutline,
} from "react-icons/io5";
import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDocker,
  FaAws,
  FaBootstrap,
  FaSass,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiCsharp,
  SiDotnet,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiMui,
  SiSequelize,
  SiPrisma,
  SiFirebase,
  SiCypress,
  SiPhp,
  SiLaravel,
  SiMysql,
} from "react-icons/si";

const Resume = () => {
  const [activeSection, setActiveSection] = useState("all");
  const [animatedElements, setAnimatedElements] = useState({});
  const [tabChanging, setTabChanging] = useState(false);

  useEffect(() => {
    // Initialize all elements as visible for initial animation
    const elements = document.querySelectorAll(".animate-on-scroll");
    const initialState = {};

    elements.forEach((el, index) => {
      initialState[`element-${index}`] = false;

      // Set a timeout to animate elements sequentially on first load
      setTimeout(() => {
        setAnimatedElements((prev) => ({
          ...prev,
          [`element-${index}`]: true,
        }));
      }, 100 + index * 100);
    });

    setAnimatedElements(initialState);
  }, []);

  // Handle tab changes with animation
  const handleTabChange = (tabName) => {
    if (activeSection === tabName) return;

    // Start transition out
    setTabChanging(true);

    // Change tab after fade out animation
    setTimeout(() => {
      setActiveSection(tabName);

      // Start transition in
      setTimeout(() => {
        setTabChanging(false);
      }, 50);
    }, 300);
  };

  const renderSkillIcon = (skillName) => {
    const icons = {
      React: <FaReact className="text-[#61DAFB]" />,
      TypeScript: <SiTypescript className="text-[#3178C6]" />,
      JavaScript: <SiJavascript className="text-[#F7DF1E]" />,
      "Node.js": <FaNodeJs className="text-[#339933]" />,
      "Express.js": <SiExpress className="text-white" />,
      "C#": <SiCsharp className="text-[#239120]" />,
      "ASP.NET": <SiDotnet className="text-[#512BD4]" />,
      PHP: <SiPhp className="text-[#777BB4]" />,
      Laravel: <SiLaravel className="text-[#FF2D20]" />,
      MongoDB: <SiMongodb className="text-[#47A248]" />,
      PostgreSQL: <SiPostgresql className="text-[#336791]" />,
      MySQL: <SiMysql className="text-[#4479A1]" />,
      TailwindCSS: <SiTailwindcss className="text-[#06B6D4]" />,
      MUI: <SiMui className="text-[#007FFF]" />,
      Bootstrap: <FaBootstrap className="text-[#7952B3]" />,
      SASS: <FaSass className="text-[#CC6699]" />,
      Git: <FaGit className="text-[#F05032]" />,
      GitHub: <FaGithub className="text-white" />,
      Docker: <FaDocker className="text-[#2496ED]" />,
      AWS: <FaAws className="text-[#FF9900]" />,
      Sequelize: <SiSequelize className="text-[#52B0E7]" />,
      Prisma: <SiPrisma className="text-white" />,
      Firebase: <SiFirebase className="text-[#FFCA28]" />,
      Cypress: <SiCypress className="text-white" />,
      "Entity Framework": <SiDotnet className="text-[#512BD4]" />, // Using .NET icon as fallback
    };

    return icons[skillName] || <div className="w-4 h-4" />;
  };

  // Check if a section should be visible
  const isActive = (section) => {
    if (activeSection === "all") return true;
    return activeSection === section;
  };

  return (
    <div
      id="resume"
      className="min-h-screen p-6 md:px-10 lg:px-20 pt-24 pb-16 text-text-primary bg-gradient-to-b from-bg-primary to-bg-secondary transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="animate-on-scroll" id="element-0">
          <div
            className={`text-center mb-10 transition-all duration-1000 ease-out ${animatedElements["element-0"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
              }`}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
              Resume
            </h1>
            <p className="text-text-secondary max-w-2xl mx-auto mb-6">
              A comprehensive overview of my professional journey, technical
              skills, and work experience.
            </p>
            <a
              href="https://docs.google.com/document/d/1isg-Y1_idZHA35qVe4st7yB0c-MGRwgQ0O6SxmKkNfc/export?format=pdf"
              download="Mehdi_Azar_Technical_Resume.pdf"
              className="btn-primary inline-flex items-center justify-center"
            >
              <IoDownloadOutline className="mr-2 text-xl" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="animate-on-scroll" id="element-1">
          <div
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 ease-out ${animatedElements["element-1"]
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
              }`}
          >
            <FilterButton
              active={activeSection === "all"}
              onClick={() => handleTabChange("all")}
            >
              All
            </FilterButton>
            <FilterButton
              active={activeSection === "skills"}
              onClick={() => handleTabChange("skills")}
            >
              Technical Skills
            </FilterButton>
            <FilterButton
              active={activeSection === "experience"}
              onClick={() => handleTabChange("experience")}
            >
              Work Experience
            </FilterButton>
            <FilterButton
              active={activeSection === "education"}
              onClick={() => handleTabChange("education")}
            >
              Education
            </FilterButton>
          </div>
        </div>

        {/* Resume Content with transition */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out transform ${tabChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
        >
          {/* Technical Skills */}
          <div
            className={`${activeSection === "skills"
              ? "md:col-span-3 lg:col-span-3 md:mx-auto md:max-w-3xl"
              : activeSection === "experience" ||
                activeSection === "education"
                ? "hidden md:hidden"
                : "md:col-span-3 lg:col-span-1"
              } transition-all duration-500 ease-in-out ${isActive("skills") || activeSection === "all" ? "block" : "hidden"
              }`}
          >
            <div className="animate-on-scroll" id="element-2">
              <div
                className={`card p-6 md:p-8 h-full transition-all duration-1000 ease-out ${animatedElements["element-2"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
                  }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <IoCodeSlashOutline className="text-primary text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold">Technical Skills</h2>
                </div>

                <div className="space-y-6">
                  {/* Frontend Skills */}
                  <div className="transition-all duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold mb-3 text-primary">
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge
                        name="React"
                        icon={renderSkillIcon("React")}
                      />
                      <SkillBadge
                        name="TypeScript"
                        icon={renderSkillIcon("TypeScript")}
                      />
                      <SkillBadge
                        name="JavaScript"
                        icon={renderSkillIcon("JavaScript")}
                      />
                      <SkillBadge
                        name="TailwindCSS"
                        icon={renderSkillIcon("TailwindCSS")}
                      />
                      <SkillBadge name="MUI" icon={renderSkillIcon("MUI")} />
                      <SkillBadge
                        name="Bootstrap"
                        icon={renderSkillIcon("Bootstrap")}
                      />
                      <SkillBadge name="SASS" icon={renderSkillIcon("SASS")} />
                    </div>
                  </div>

                  {/* Backend Skills */}
                  <div className="transition-all duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold mb-3 text-primary">
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge
                        name="Node.js"
                        icon={renderSkillIcon("Node.js")}
                      />
                      <SkillBadge
                        name="Express.js"
                        icon={renderSkillIcon("Express.js")}
                      />
                      <SkillBadge
                        name="PHP"
                        icon={renderSkillIcon("PHP")}
                      />
                      <SkillBadge
                        name="Laravel"
                        icon={renderSkillIcon("Laravel")}
                      />
                      <SkillBadge name="C#" icon={renderSkillIcon("C#")} />
                      <SkillBadge
                        name="ASP.NET"
                        icon={renderSkillIcon("ASP.NET")}
                      />
                      <SkillBadge
                        name="Entity Framework"
                        icon={renderSkillIcon("Entity Framework")}
                      />
                    </div>
                  </div>

                  {/* Database Skills */}
                  <div className="transition-all duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold mb-3 text-primary">
                      Database
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge
                        name="MongoDB"
                        icon={renderSkillIcon("MongoDB")}
                      />
                      <SkillBadge
                        name="PostgreSQL"
                        icon={renderSkillIcon("PostgreSQL")}
                      />
                      <SkillBadge
                        name="MySQL"
                        icon={renderSkillIcon("MySQL")}
                      />
                      <SkillBadge
                        name="Sequelize"
                        icon={renderSkillIcon("Sequelize")}
                      />
                      <SkillBadge
                        name="Prisma"
                        icon={renderSkillIcon("Prisma")}
                      />
                    </div>
                  </div>

                  {/* DevOps & Tools */}
                  <div className="transition-all duration-300 ease-in-out">
                    <h3 className="text-lg font-semibold mb-3 text-primary">
                      DevOps & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillBadge name="Git" icon={renderSkillIcon("Git")} />
                      <SkillBadge
                        name="GitHub"
                        icon={renderSkillIcon("GitHub")}
                      />
                      <SkillBadge
                        name="Docker"
                        icon={renderSkillIcon("Docker")}
                      />
                      <SkillBadge name="AWS" icon={renderSkillIcon("AWS")} />
                      <SkillBadge
                        name="Firebase"
                        icon={renderSkillIcon("Firebase")}
                      />
                      <SkillBadge
                        name="Cypress"
                        icon={renderSkillIcon("Cypress")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Work Experience & Education */}
          <div
            className={`${activeSection === "skills"
              ? "hidden md:hidden"
              : activeSection === "experience" ||
                activeSection === "education"
                ? "md:col-span-3 lg:col-span-3 md:mx-auto md:max-w-3xl"
                : "md:col-span-3 lg:col-span-2"
              } transition-all duration-500 ease-in-out`}
          >
            <div className="space-y-8">
              {/* Professional Experience */}
              <div className={`${isActive("experience") ? "block" : "hidden"}`}>
                <div className="animate-on-scroll" id="element-3">
                  <div
                    className={`card p-6 md:p-8 transition-all duration-1000 ease-out ${animatedElements["element-3"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-secondary/20 rounded-lg">
                        <IoBusinessOutline className="text-secondary text-xl" />
                      </div>
                      <h2 className="text-2xl font-bold">Work Experience</h2>
                    </div>

                    <div className="space-y-8">

                      {/* Host Guest Project */}
                      <JobExperience
                        title="Full-Stack Developer - Host Guest Platform"
                        company="Professional Project"
                        period="06/2025 - Present"
                        location="Remote"
                        description="Developed a comprehensive homestay booking platform using Laravel and PHP, featuring advanced AI-powered identity verification and payment processing systems."
                        highlights={[
                          "Built full-stack application with Laravel, PHP, and MySQL handling booking workflows and user management",
                          "Integrated AWS Rekognition for facial recognition and AWS Textract for document verification",
                          "Implemented secure payment processing with PayPal and Authorize.Net APIs",
                          "Developed real-time messaging system using Laravel Echo and Pusher",
                          "Integrated Google Maps API for location-based services and property visualization",
                          "Utilized Laravel ecosystem: Livewire for reactive components, Sanctum for API authentication, Horizon for queue management",
                          "Deployed AWS services (S3 for storage, SES for email notifications) with optimized infrastructure",
                        ]}
                        delay={0}
                      />

                      {/* Job 1 */}
                      <JobExperience
                        title="Full-Stack Developer"
                        company="TTP"
                        period="09/2024 - 05/2025"
                        location="Rancho Santa Margarita, CA"
                        description="Spearheaded the rapid clearance of development backlog, addressing all outstanding issues within the first month of tenure."
                        highlights={[
                          "Engineered mobile-responsive map search functionality using ReactNative",
                          "Implemented enhanced authentication systems with custom user notifications",
                          "Created interactive bed reservation interface with drag-and-drop functionality",
                          "Led UI improvements utilizing MUI, Tailwind CSS, and ReactJS",
                          "Contributed to backend development with C#, Entity Framework, and PostgreSQL",
                        ]}
                        delay={1}
                      />

                      {/* Megasys Updated */}
                      <JobExperience
                        title="Full-Stack Developer / DevOps / Content Writer"
                        company="Megasys Inc"
                        period="01/2020 - 09/2024"
                        location="Anaheim, CA"
                        description="Progressed from web development and DevOps tasks into full-stack financial application development using ReactJS, C#.NET, Entity Framework, and SQL Server."
                        highlights={[
                          "Built secure payment and authentication modules integrated with SQL Server backend.",
                          "Co-led a team of three, mentoring a junior developer while contributing to cross-team UI/UX improvements.",
                          "Developed and implemented a UI testing framework using Playwright, improving test coverage and efficiency by 40%.",
                          "Participated actively in Agile development cycles, code reviews, and Git-based source control workflows.",
                        ]}
                        delay={2}
                      />

                      {/* AdIQ Updated */}
                      <JobExperience
                        title="Web Developer / SEO Specialist"
                        company="AdIQ"
                        period="08/2016 - 01/2019"
                        location="Costa Mesa, CA"
                        description="Designed and developed SEO-optimized websites and custom automation tools to increase client visibility and internal production efficiency."
                        highlights={[
                          "Increased client search rankings by 25% and organic traffic by 30% through full on-page and technical SEO optimization.",
                          "Led and mentored the web team, introducing automation workflows that raised production output by 80%.",
                          "Developed custom text processing, keyword generation, and SEO reporting tools to reduce manual workload.",
                          "Integrated SQL databases with WordPress for dynamic content delivery and client-friendly content management.",
                          "Recognized as the top performer in the technical team for three consecutive semi-annual evaluations.",
                        ]}
                        delay={3}
                      />

                      {/* Job 4 */}
                      <JobExperience
                        title="IT Specialist"
                        company="Various Companies"
                        period="2007 - 2014"
                        location=""
                        description="Provided comprehensive IT support, troubleshooting, and problem-solving across various software and hardware systems."
                        highlights={[
                          "Enhanced system performance by regularly updating and maintaining IT resources",
                          "Assisted in deployment and management of network solutions",
                          "Contributed to robust and efficient IT infrastructure",
                        ]}
                        delay={4}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className={`${isActive("education") ? "block" : "hidden"}`}>
                <div className="animate-on-scroll" id="element-4">
                  <div
                    className={`card p-6 md:p-8 transition-all duration-1000 ease-out ${animatedElements["element-4"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-success/20 rounded-lg">
                        <IoSchoolOutline className="text-success text-xl" />
                      </div>
                      <h2 className="text-2xl font-bold">Education</h2>
                    </div>

                    <div className="bg-bg-tertiary rounded-lg p-5 mb-6 transition-all duration-300 ease-in-out transform hover:shadow-md">
                      <div className="md:flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">
                            Certificate in Full Stack Web Development
                          </h3>
                          <p className="text-primary">
                            University of California, Irvine – Division of
                            Continuing Education
                          </p>
                        </div>
                        <p className="text-text-secondary mt-2 md:mt-0">
                          June 2024 - December 2024
                        </p>
                      </div>

                      <ul className="space-y-2 text-text-secondary">
                        <li className="flex items-start gap-2">
                          <span className="text-success mt-1">•</span>
                          <span>
                            Completed intensive coursework in JavaScript,
                            Node.js, React, SQL, MongoDB, and Python focusing on
                            both MERN and PERN stacks.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-success mt-1">•</span>
                          <span>
                            Regularly elected by peers to lead project teams
                            across all major and semi-major projects, ensuring
                            quality and timely delivery.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-success mt-1">•</span>
                          <span>
                            Led teams through full software development life
                            cycles including planning, development, testing, and
                            deployment.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-success mt-1">•</span>
                          <span>
                            Developed RESTful APIs, managed databases with
                            Prisma, Sequelize, and Mongoose, and enhanced
                            client-side data interaction with GraphQL and Apollo
                            Server.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-success mt-1">•</span>
                          <span>
                            Gained practical experience in CI/CD processes,
                            containerization with Docker, and end-to-end testing
                            using Cypress.
                          </span>
                        </li>
                      </ul>
                      <div className="mt-6 flex justify-center">
                        <a
                          href="https://www.parchment.com/u/award/7f4583f379bc1cf88ec2d305dea1ad1c"
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary inline-flex items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                          View Certificate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Summary */}
              <div
                className={`${activeSection === "all" ? "block" : "hidden"}`}
              >
                <div className="animate-on-scroll" id="element-5">
                  <div
                    className={`card p-6 md:p-8 transition-all duration-1000 ease-out ${animatedElements["element-5"]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <FaReact className="text-primary text-xl" />
                      </div>
                      <h2 className="text-2xl font-bold">Career Summary</h2>
                    </div>

                    <p className="text-text-secondary leading-relaxed mb-6">
                      <b className="text-text-primary">Full-stack engineer</b> crafting <b className="text-text-primary">reliable</b>,{" "}
                      <b className="text-text-primary">high-performance</b> web and financial systems. Adept
                      at steering projects from concept to deployment, I combine
                      strong technical skills with a pragmatic, execution-first
                      mindset developed through years of frontline development
                      experience.
                    </p>

                    <p className="text-text-secondary leading-relaxed mb-6">
                      My toolkit spans modern <b className="text-text-primary">JavaScript ecosystems</b> (
                      <b className="text-text-primary">React</b>, <b className="text-text-primary">TypeScript</b>, <b className="text-text-primary">Node.js</b>), robust
                      backend architectures (<b className="text-text-primary">C#.NET</b>, <b className="text-text-primary">ASP.NET</b>,{" "}
                      <b className="text-text-primary">Entity Framework</b>), and dynamic <b className="text-text-primary">CMS platforms</b>{" "}
                      (<b className="text-text-primary">WordPress</b>, <b className="text-text-primary">Joomla</b>, <b className="text-text-primary">Shopify</b>). I
                      specialize in building scalable <b className="text-text-primary">APIs</b>, integrating{" "}
                      <b className="text-text-primary">relational and non-relational databases</b>, and
                      crafting user-centered frontend experiences with{" "}
                      <b className="text-text-primary">Tailwind CSS</b>, <b className="text-text-primary">MUI</b>, and custom UI libraries.
                    </p>

                    <p className="text-text-secondary leading-relaxed mb-6">
                      Across multiple organizations, I consistently earned{" "}
                      <b className="text-text-primary">leadership roles</b>, mentoring{" "}
                      <b className="text-text-primary">junior developers</b>, co-leading <b className="text-text-primary">Agile squads</b>,
                      and architecting <b className="text-text-primary">testing workflows</b> that accelerated
                      delivery without sacrificing quality. At <b className="text-text-primary">UCI</b>, peers
                      repeatedly chose me to lead capstone teams, driving
                      software projects from <b className="text-text-primary">wireframe</b> to{" "}
                      <b className="text-text-primary">live deployment</b> while meeting aggressive deadlines.
                    </p>

                    <p className="text-text-secondary leading-relaxed mb-6">
                      Comfortable in fast-moving environments, I implemented{" "}
                      <b className="text-text-primary">Playwright-based testing pipelines</b>, automated{" "}
                      <b className="text-text-primary">SEO reporting tools</b>, and containerized deployments
                      with <b className="text-text-primary">Docker</b>. My focus remains on measurable
                      improvements: <b className="text-text-primary">faster releases</b>,{" "}
                      <b className="text-text-primary">cleaner codebases</b>, and{" "}
                      <b className="text-text-primary">production-grade reliability</b>.
                    </p>

                    <p className="text-text-secondary leading-relaxed">
                      Recently, I deepened my backend specialization with{" "}
                      <b className="text-text-primary">PostgreSQL optimizations</b>,{" "}
                      <b className="text-text-primary">Entity Framework enhancements</b>, and{" "}
                      <b className="text-text-primary">C#.NET enterprise systems</b>. Additionally, I leverage{" "}
                      <b className="text-text-primary">AI-driven tools</b> like <b className="text-text-primary">GitHub Copilot</b> and{" "}
                      <b className="text-text-primary">LangChain</b> to augment development velocity, and I
                      design <b className="text-text-primary">e-commerce experiences</b> via custom{" "}
                      <b className="text-text-primary">Shopify Liquid builds</b> and{" "}
                      <b className="text-text-primary">Storefront API integrations</b>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const FilterButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${active
      ? "btn-primary"
      : "bg-bg-tertiary text-text-secondary hover:bg-bg-elevated hover:text-text-primary"
      }`}
  >
    {children}
  </button>
);

const SkillBadge = ({ name, icon }) => (
  <div className="bg-bg-tertiary px-3 py-1 rounded-full flex items-center gap-2 text-sm transition-all duration-300 hover:bg-bg-elevated hover:scale-105 cursor-default text-text-secondary hover:text-text-primary">
    {icon}
    <span>{name}</span>
  </div>
);

const JobExperience = ({
  title,
  company,
  period,
  location,
  description,
  highlights,
  delay = 0,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100 + delay * 100);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`border-l-2 border-secondary/50 pl-5 relative transition-all duration-500 ease-out transform ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
    >
      <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary"></div>
      <div className="mb-2">
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
        <div className="flex flex-wrap items-center gap-x-3 text-sm mb-1">
          <span className="text-secondary font-medium">{company}</span>
          <span className="text-text-secondary">{period}</span>
          {location && <span className="text-text-secondary">| {location}</span>}
        </div>
      </div>

      <p className="text-text-secondary mb-3">{description}</p>

      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-text-secondary text-sm transition-all duration-300 ease-out"
            style={{
              transitionDelay: `${100 + index * 50}ms`,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(10px)",
            }}
          >
            <span className="text-secondary mt-1">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
