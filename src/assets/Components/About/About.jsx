import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import avatar from "../../7358602-removebg-preview.png";
import TextChange from "../TextChange";
import {
  FaReact,
  FaNodeJs,
  FaCode,
  FaLaptopCode,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaDatabase,
  FaAws,
  FaDocker,
  FaChartLine,
  FaSearch,
  FaRocket,
  FaServer,
  FaCogs,
  FaPalette,
  FaMobile,
  FaCheckCircle
} from "react-icons/fa";
import {
  SiTypescript,
  SiCsharp,
  SiDotnet,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiTailwindcss,
  SiGithubactions,
  SiJenkins,
  SiKubernetes,
  SiGraphql,
  SiJest,
  SiNextdotjs,
  SiPhp,
  SiLaravel
} from "react-icons/si";

const About = () => {
  const navigate = useNavigate();
  const [animatedElements, setAnimatedElements] = useState({});
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    // Initialize all elements as visible for initial animation
    const elements = document.querySelectorAll('.animate-on-scroll');
    const initialState = {};

    elements.forEach((el, index) => {
      initialState[`element-${index}`] = false;

      // Set a timeout to animate elements sequentially on first load
      setTimeout(() => {
        setAnimatedElements(prev => ({
          ...prev,
          [`element-${index}`]: true
        }));
      }, 300 + (index * 150));
    });

    setAnimatedElements(initialState);

    // Add scroll listener for elements that come into view later
    const handleScroll = () => {
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;

        if (isVisible) {
          setAnimatedElements(prev => ({
            ...prev,
            [`element-${index}`]: true
          }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="About"
      className="relative text-text-primary min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-primary pt-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 pt-8 md:pt-16 pb-12">
          {/* Left side with text */}
          <div className="md:w-7/12 space-y-8 animate-on-scroll" id="element-0">
            <div className={`transition-all duration-1000 ease-out ${animatedElements['element-0'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              {/* Animated greeting */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-4 animate-pulse">
                  👋 Available for hire
                </span>
                <TextChange />
              </div>

              {/* Main headline with gradient */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="gradient-text">Full Stack</span>
                <br />
                <span className="text-text-primary">Developer</span>
              </h1>

              {/* Enhanced description */}
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8 max-w-2xl">
                Crafting <span className="text-primary font-semibold">beautiful</span>,
                <span className="text-accent font-semibold"> scalable</span>, and
                <span className="text-secondary font-semibold"> performant</span> web applications
                with modern technologies and best practices.
              </p>

              {/* Professional tech stack badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="badge badge-primary">
                  <FaReact className="mr-1.5" />
                  React
                </span>
                <span className="badge badge-primary">
                  <SiTypescript className="mr-1.5" />
                  TypeScript
                </span>
                <span className="badge badge-primary">
                  <FaNodeJs className="mr-1.5" />
                  Node.js
                </span>
                <span className="badge badge-primary">
                  <SiPhp className="mr-1.5" />
                  PHP
                </span>
                <span className="badge badge-primary">
                  <SiLaravel className="mr-1.5" />
                  Laravel
                </span>
                <span className="badge badge-primary">
                  <SiCsharp className="mr-1.5" />
                  C#
                </span>
                <span className="badge badge-primary">
                  <SiDotnet className="mr-1.5" />
                  .NET
                </span>
              </div>

              {/* CTA buttons with improved styling */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => navigate("/contact")}
                  className="btn-primary group"
                >
                  Let's Talk
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => navigate("/portfolio")}
                  className="btn-secondary group"
                >
                  View Work
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Social links with hover effects */}
              <div className="flex gap-3">
                <a
                  href="https://github.com/Moosorkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-bg-tertiary border border-border-primary rounded-xl hover:bg-bg-elevated hover:border-primary hover:shadow-lg transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/irdmousa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 bg-bg-tertiary border border-border-primary rounded-xl hover:bg-bg-elevated hover:border-primary hover:shadow-lg transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-xl group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side with enhanced avatar */}
          <div className="md:w-5/12 flex justify-center animate-on-scroll" id="element-1">
            <div className={`relative transition-all duration-1000 ease-out ${animatedElements['element-1'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-2xl opacity-30 animate-pulse"></div>

              {/* Rotating border animation */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-75 blur-sm animate-spin-slow"></div>

              {/* Avatar container */}
              <div className="relative">
                <img
                  className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-bg-elevated shadow-2xl transform hover:scale-105 transition-transform duration-500"
                  src={avatar}
                  alt="Developer Avatar"
                />

                {/* Status indicator */}
                <div className="absolute bottom-6 right-6 w-6 h-6 bg-success rounded-full border-4 border-bg-elevated animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Content Section */}
      <div className="relative container mx-auto px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll" id="element-2">
            <div className={`transition-all duration-1000 ease-out ${animatedElements['element-2'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
                <FaCode className="mr-4 text-primary text-3xl" />
                <span className="gradient-text">
                  About Me
                </span>
              </h2>

              <div className="card p-6 md:p-8 mb-10 hover:shadow-xl transition-all">
                <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">
                  I'm a passionate full-stack developer with hands-on experience in building responsive and scalable web applications across diverse technology stacks.
                  My work includes both frontend and backend development, with a focus on creating intuitive user experiences while solving complex technical challenges.
                </p>

                <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                  A background in <strong className="text-primary">full-stack development</strong> ensures my ability to bridge the gap between beautiful design and robust functionality.
                  Whether architecting scalable systems, optimizing performance, or creating seamless UI interactions, I aim to continually push boundaries and deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Showcase with Visual Concepts */}
        <div className="relative container mx-auto px-6 md:px-12 py-20 bg-gradient-to-b from-bg-secondary to-bg-primary">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 animate-on-scroll" id="element-8">
              <div className={`transition-all duration-1000 ${animatedElements['element-8'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="gradient-text">Technical Expertise</span>
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Proficient in modern technologies and methodologies that drive successful projects
                </p>
              </div>
            </div>

            {/* Skill Categories Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

              {/* Frontend Development */}
              <SkillCard
                icon={<FaReact />}
                title="Frontend Development"
                gradient="from-blue-500 to-cyan-400"
                description="Building responsive, interactive UIs"
                concept="User Experience & Interface Design"
                skills={[
                  { name: "React & TypeScript", icon: <SiTypescript />, level: 90 },
                  { name: "Next.js & SSR", icon: <SiNextdotjs />, level: 85 },
                  { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
                  { name: "Responsive Design", icon: <FaMobile />, level: 90 }
                ]}
                animationId="element-9"
                isAnimated={animatedElements['element-9']}
                onClick={() => setSelectedSkill({
                  title: "Frontend Development",
                  icon: <FaReact />,
                  gradient: "from-blue-500 to-cyan-400",
                  description: "Building modern, responsive, and interactive user interfaces with cutting-edge technologies.",
                  details: "I specialize in creating seamless user experiences using React and TypeScript, leveraging Next.js for server-side rendering and optimal performance. My frontend work focuses on accessibility, responsive design, and component-driven architecture.",
                  projects: [
                    { name: "E-Commerce Platform", tech: ["React", "TypeScript", "Tailwind"], description: "Built a full-featured shopping platform with cart management and checkout" },
                    { name: "Real-time Dashboard", tech: ["Next.js", "React", "WebSocket"], description: "Interactive analytics dashboard with live data updates" },
                    { name: "Portfolio Website", tech: ["React", "Tailwind", "Vite"], description: "Modern portfolio with animations and dark mode support" }
                  ],
                  tools: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vite", "Redux", "React Query"]
                })}
              />

              {/* Backend Development */}
              <SkillCard
                icon={<FaServer />}
                title="Backend Development"
                gradient="from-green-500 to-emerald-400"
                description="Scalable server architectures"
                concept="API Design & Data Management"
                skills={[
                  { name: "Node.js & Express", icon: <FaNodeJs />, level: 88 },
                  { name: "C# & .NET Core", icon: <SiCsharp />, level: 85 },
                  { name: "RESTful APIs", icon: <FaCogs />, level: 92 },
                  { name: "GraphQL", icon: <SiGraphql />, level: 80 }
                ]}
                animationId="element-10"
                isAnimated={animatedElements['element-10']}
                onClick={() => setSelectedSkill({
                  title: "Backend Development",
                  icon: <FaServer />,
                  gradient: "from-green-500 to-emerald-400",
                  description: "Architecting robust, scalable server-side applications and APIs.",
                  details: "I build high-performance backend systems using Node.js, PHP/Laravel, and C#/.NET, focusing on clean architecture, security, and scalability. My expertise includes RESTful API design, GraphQL implementation, and microservices architecture.",
                  projects: [
                    { name: "Host Guest Platform", tech: ["Laravel", "PHP", "MySQL", "AWS"], description: "Full-stack homestay booking platform with identity verification, payment processing, and real-time messaging" },
                    { name: "Invoice Management API", tech: ["Node.js", "Express", "PostgreSQL"], description: "RESTful API for invoice tracking with authentication and email notifications" },
                    { name: "Authentication Service", tech: ["C#", ".NET Core", "JWT"], description: "Secure authentication system with role-based access control" }
                  ],
                  tools: ["Node.js", "Express", "PHP", "Laravel", "C#", ".NET Core", "GraphQL", "REST APIs", "Microservices"]
                })}
              />

              {/* Database & Storage */}
              <SkillCard
                icon={<FaDatabase />}
                title="Database & Storage"
                gradient="from-purple-500 to-pink-400"
                description="Data modeling & optimization"
                concept="Data Architecture & Performance"
                skills={[
                  { name: "PostgreSQL", icon: <SiPostgresql />, level: 87 },
                  { name: "MongoDB", icon: <SiMongodb />, level: 83 },
                  { name: "Redis Cache", icon: <SiRedis />, level: 78 },
                  { name: "Entity Framework", icon: <SiDotnet />, level: 85 }
                ]}
                animationId="element-11"
                isAnimated={animatedElements['element-11']}
                onClick={() => setSelectedSkill({
                  title: "Database & Storage",
                  icon: <FaDatabase />,
                  gradient: "from-purple-500 to-pink-400",
                  description: "Designing efficient database schemas and optimizing data access patterns.",
                  details: "I work with both SQL and NoSQL databases, implementing efficient data models, indexes, and caching strategies. My focus is on data integrity, performance optimization, and scalable storage solutions.",
                  projects: [
                    { name: "User Management System", tech: ["PostgreSQL", "Entity Framework"], description: "Normalized database with complex relationships and optimized queries" },
                    { name: "Content Management Platform", tech: ["MongoDB", "Redis"], description: "Document-based storage with Redis caching for high-traffic content" },
                    { name: "Analytics Pipeline", tech: ["PostgreSQL", "Redis"], description: "Data aggregation system with caching layer for real-time analytics" }
                  ],
                  tools: ["PostgreSQL", "MongoDB", "Redis", "Entity Framework", "Prisma", "SQL", "NoSQL"]
                })}
              />

              {/* Cloud & DevOps */}
              <SkillCard
                icon={<FaAws />}
                title="Cloud & AWS"
                gradient="from-orange-500 to-yellow-400"
                description="Cloud infrastructure & deployment"
                concept="Scalable Cloud Architecture"
                skills={[
                  { name: "AWS Services (EC2, S3, RDS)", icon: <FaAws />, level: 82 },
                  { name: "Docker Containers", icon: <FaDocker />, level: 85 },
                  { name: "Kubernetes", icon: <SiKubernetes />, level: 75 },
                  { name: "Serverless Functions", icon: <FaRocket />, level: 80 }
                ]}
                animationId="element-12"
                isAnimated={animatedElements['element-12']}
                onClick={() => setSelectedSkill({
                  title: "Cloud & AWS",
                  icon: <FaAws />,
                  gradient: "from-orange-500 to-yellow-400",
                  description: "Deploying and managing scalable cloud infrastructure.",
                  details: "I leverage AWS services to build scalable, resilient applications. My expertise includes containerization with Docker, orchestration with Kubernetes, serverless architectures, and AI-powered services like AWS Rekognition and Textract for document verification.",
                  projects: [
                    { name: "Host Guest Identity Verification", tech: ["AWS Rekognition", "AWS Textract", "PHP"], description: "AI-powered identity verification system using facial recognition and document scanning" },
                    { name: "Microservices Platform", tech: ["AWS", "Docker", "Kubernetes"], description: "Containerized microservices deployed on EKS with auto-scaling" },
                    { name: "Serverless API", tech: ["AWS Lambda", "API Gateway", "DynamoDB"], description: "Cost-effective serverless backend with pay-per-use pricing" }
                  ],
                  tools: ["AWS (EC2, S3, Lambda, RDS, Rekognition, Textract)", "Docker", "Kubernetes", "Terraform", "CloudFormation"]
                })}
              />

              {/* CI/CD & Testing */}
              <SkillCard
                icon={<FaCogs />}
                title="CI/CD Pipelines"
                gradient="from-indigo-500 to-blue-400"
                description="Automated workflows & testing"
                concept="Continuous Integration & Deployment"
                skills={[
                  { name: "GitHub Actions", icon: <SiGithubactions />, level: 88 },
                  { name: "Jenkins", icon: <SiJenkins />, level: 80 },
                  { name: "Jest & Testing", icon: <SiJest />, level: 85 },
                  { name: "Automated Deployment", icon: <FaCheckCircle />, level: 87 }
                ]}
                animationId="element-13"
                isAnimated={animatedElements['element-13']}
                onClick={() => setSelectedSkill({
                  title: "CI/CD Pipelines",
                  icon: <FaCogs />,
                  gradient: "from-indigo-500 to-blue-400",
                  description: "Automating testing, building, and deployment processes.",
                  details: "I implement comprehensive CI/CD pipelines that ensure code quality through automated testing, building, and deployment. My workflows include unit tests, integration tests, and automated deployments to multiple environments.",
                  projects: [
                    { name: "Automated Testing Suite", tech: ["Jest", "GitHub Actions", "Cypress"], description: "Complete test automation with 85% code coverage" },
                    { name: "Multi-Environment Pipeline", tech: ["Jenkins", "Docker", "AWS"], description: "Automated deployment to dev, staging, and production" },
                    { name: "Quality Gates", tech: ["GitHub Actions", "SonarQube", "ESLint"], description: "Automated code quality checks and security scanning" }
                  ],
                  tools: ["GitHub Actions", "Jenkins", "Jest", "Cypress", "Docker", "SonarQube"]
                })}
              />

              {/* SEO & Performance */}
              <SkillCard
                icon={<FaSearch />}
                title="SEO & Analytics"
                gradient="from-pink-500 to-rose-400"
                description="Search optimization & tracking"
                concept="Digital Marketing & Growth"
                skills={[
                  { name: "Technical SEO", icon: <FaSearch />, level: 82 },
                  { name: "Performance Optimization", icon: <FaRocket />, level: 88 },
                  { name: "Analytics & Tracking", icon: <FaChartLine />, level: 80 },
                  { name: "Core Web Vitals", icon: <FaCheckCircle />, level: 85 }
                ]}
                animationId="element-14"
                isAnimated={animatedElements['element-14']}
                onClick={() => setSelectedSkill({
                  title: "SEO & Analytics",
                  icon: <FaSearch />,
                  gradient: "from-pink-500 to-rose-400",
                  description: "Optimizing websites for search engines and user experience.",
                  details: "I implement technical SEO best practices, optimize Core Web Vitals, and set up analytics tracking to drive organic growth. My focus is on performance optimization, structured data, and data-driven insights.",
                  projects: [
                    { name: "E-commerce SEO", tech: ["Next.js", "Structured Data", "Lighthouse"], description: "Improved page speed by 40% and organic traffic by 60%" },
                    { name: "Analytics Dashboard", tech: ["Google Analytics", "React", "Charts.js"], description: "Custom analytics dashboard for tracking user behavior" },
                    { name: "Performance Optimization", tech: ["Webpack", "Lazy Loading", "CDN"], description: "Achieved 95+ Lighthouse scores across all metrics" }
                  ],
                  tools: ["Google Analytics", "Google Search Console", "Lighthouse", "SEMrush", "Structured Data"]
                })}
              />

            </div>

            {/* Visual Concepts Section */}
            <div className="mt-20 text-center">
              <div className="animate-on-scroll" id="element-15">
                <div className={`transition-all duration-1000 ${animatedElements['element-15'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
                    Real-World Applications
                  </h3>
                  <p className="text-text-secondary max-w-3xl mx-auto mb-12">
                    These technologies come together to create powerful solutions in various domains
                  </p>

                  {/* Concept Cards with Images */}
                  <div className="grid md:grid-cols-3 gap-8">

                    {/* CI/CD Concept */}
                    <div className="card p-6 hover:shadow-2xl transition-all group">
                      <div className="w-full h-48 bg-gradient-to-br from-indigo-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex items-center gap-4 opacity-70">
                            <SiGithubactions className="text-6xl text-primary animate-pulse" />
                            <FaArrowRight className="text-3xl text-text-tertiary" />
                            <FaRocket className="text-5xl text-accent" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                      </div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">CI/CD Pipelines</h4>
                      <p className="text-sm text-text-secondary">
                        Automated testing, building, and deployment workflows that ensure code quality and rapid delivery
                      </p>
                    </div>

                    {/* SEO Concept */}
                    <div className="card p-6 hover:shadow-2xl transition-all group">
                      <div className="w-full h-48 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-3 gap-2 opacity-60">
                            <FaSearch className="text-4xl text-primary" />
                            <FaChartLine className="text-5xl text-accent animate-pulse" />
                            <FaCheckCircle className="text-4xl text-success" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-rose-500"></div>
                      </div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">SEO & Analytics</h4>
                      <p className="text-sm text-text-secondary">
                        Search engine optimization, performance tracking, and data-driven insights for digital growth
                      </p>
                    </div>

                    {/* Cloud/AWS Concept */}
                    <div className="card p-6 hover:shadow-2xl transition-all group">
                      <div className="w-full h-48 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex items-center gap-3 opacity-70">
                            <FaAws className="text-7xl text-orange-500 animate-float" />
                            <FaDocker className="text-5xl text-blue-400" />
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-400"></div>
                      </div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Cloud Computing</h4>
                      <p className="text-sm text-text-secondary">
                        Scalable infrastructure with AWS services, containerization, and serverless architecture
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Original Content Sections */}
        <div className="relative container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="animate-on-scroll" id="element-3">
              <div className={`group card card-interactive p-8 h-full transition-all duration-1000 ease-out ${animatedElements['element-3'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="p-4 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaLaptopCode className="text-primary text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-primary transition-colors">Frontend Mastery</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Building responsive, accessible interfaces with React, TypeScript, and modern CSS frameworks. Focus on performance and user experience.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll" id="element-4">
              <div className={`group card card-interactive p-8 h-full transition-all duration-1000 ease-out ${animatedElements['element-4'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="p-4 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaNodeJs className="text-secondary text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-secondary transition-colors">Backend Development</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Creating robust APIs and scalable server architectures with Node.js, C#, and .NET. Expert in database design and optimization.
                </p>
              </div>
            </div>

            <div className="animate-on-scroll" id="element-5">
              <div className={`group card card-interactive p-8 h-full transition-all duration-1000 ease-out ${animatedElements['element-5'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                <div className="p-4 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaDatabase className="text-accent text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent transition-colors">Database & DevOps</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  PostgreSQL, MongoDB, Entity Framework. CI/CD pipelines, Docker, and cloud deployment with AWS and Azure.
                </p>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="animate-on-scroll" id="element-6">
            <div className={`card p-8 md:p-12 transition-all duration-1000 ease-out ${animatedElements['element-6'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 gradient-text">Technical Highlights</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Recent Projects
                  </h4>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start gap-3 group cursor-default">
                      <span className="text-primary mt-1 group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-text-primary transition-colors">Mobile-responsive map search with React & Leaflet</span>
                    </li>
                    <li className="flex items-start gap-3 group cursor-default">
                      <span className="text-primary mt-1 group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-text-primary transition-colors">Enhanced authentication systems with C# & .NET</span>
                    </li>
                    <li className="flex items-start gap-3 group cursor-default">
                      <span className="text-primary mt-1 group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-text-primary transition-colors">Interactive drag-and-drop interfaces</span>
                    </li>
                    <li className="flex items-start gap-3 group cursor-default">
                      <span className="text-primary mt-1 group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-text-primary transition-colors">Full-stack invoice tracking application</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-secondary flex items-center">
                    <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                    Core Competencies
                  </h4>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start gap-3 group cursor-default">
                      <span className="text-secondary mt-1 group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-text-primary transition-colors">Clean, maintainable code architecture</span>
                    </li>
                    <li className="flex items-start gap-3 group cursor-default">
                      <span className="text-secondary mt-1 group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-text-primary transition-colors">Performance optimization & scalability</span>
                    </li>
                    <li className="flex items-start gap-3 group cursor-default">
                      <span className="text-secondary mt-1 group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-text-primary transition-colors">Responsive design & accessibility</span>
                    </li>
                    <li className="flex items-start gap-3 group cursor-default">
                      <span className="text-secondary mt-1 group-hover:scale-125 transition-transform">✓</span>
                      <span className="group-hover:text-text-primary transition-colors">Agile development & team collaboration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="relative container mx-auto px-6 md:px-12 pb-20">
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll" id="element-7">
              <div className={`card p-10 md:p-16 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20 transition-all duration-1000 ease-out ${animatedElements['element-7'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">Let's Build Something Amazing</h3>
                <p className="text-lg md:text-xl mb-8 text-text-secondary max-w-2xl mx-auto">
                  Have a project in mind? Let's collaborate and create something exceptional together.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    className="btn-primary group"
                    onClick={() => navigate("/contact")}
                  >
                    Start a Conversation
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link to="/portfolio" className="btn-secondary group">
                    See My Work
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedSkill(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-bg-elevated rounded-2xl shadow-2xl border border-border-primary"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`sticky top-0 z-10 bg-gradient-to-r ${selectedSkill.gradient} p-6 rounded-t-2xl`}>
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-all"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-4 text-white">
                <div className="text-5xl p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
                  {selectedSkill.icon}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedSkill.title}</h2>
                  <p className="text-white/90 text-lg">{selectedSkill.description}</p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-3 flex items-center">
                  <span className={`w-1 h-6 bg-gradient-to-b ${selectedSkill.gradient} rounded-full mr-3`}></span>
                  Overview
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {selectedSkill.details}
                </p>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                  <span className={`w-1 h-6 bg-gradient-to-b ${selectedSkill.gradient} rounded-full mr-3`}></span>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.tools.map((tool, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 bg-gradient-to-r ${selectedSkill.gradient} bg-opacity-10 border border-primary/20 rounded-full text-sm font-medium text-text-primary hover:scale-105 transition-transform`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related Projects */}
              <div>
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                  <span className={`w-1 h-6 bg-gradient-to-b ${selectedSkill.gradient} rounded-full mr-3`}></span>
                  Related Projects
                </h3>
                <div className="grid gap-4">
                  {selectedSkill.projects.map((project, index) => (
                    <div
                      key={index}
                      className="card p-5 hover:shadow-lg hover:border-primary/30 transition-all group cursor-pointer"
                    >
                      <h4 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-sm text-text-secondary mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-bg-tertiary text-xs font-medium text-text-tertiary rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className={`p-6 bg-gradient-to-r ${selectedSkill.gradient} bg-opacity-10 rounded-xl border border-primary/20 text-center`}>
                <p className="text-text-primary mb-4">
                  Want to see more projects using these technologies?
                </p>
                <button
                  onClick={() => {
                    setSelectedSkill(null);
                    navigate("/portfolio");
                  }}
                  className="btn-primary"
                >
                  View Portfolio
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Skill Card Component with Visual Concepts
const SkillCard = ({ icon, title, gradient, description, concept, skills, animationId, isAnimated, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`animate-on-scroll transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      id={animationId}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="group card card-interactive p-6 h-full bg-gradient-to-br from-bg-elevated to-bg-secondary border-2 border-border-primary hover:border-primary/50 transition-all duration-500 cursor-pointer">

        {/* Header with Icon */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`p-4 bg-gradient-to-br ${gradient} rounded-2xl text-white text-3xl shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-500`}>
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-text-tertiary">{description}</p>
          </div>
        </div>

        {/* Concept Label */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full">
            <FaPalette className="text-primary text-xs" />
            <span className="text-xs font-medium text-primary">{concept}</span>
          </div>
        </div>

        {/* Skills List with Progress Bars */}
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group/skill"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary text-sm group-hover/skill:scale-110 transition-transform">
                    {skill.icon}
                  </span>
                  <span className="text-sm font-medium text-text-secondary group-hover/skill:text-text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-semibold text-text-tertiary">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="h-2 bg-bg-tertiary rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${gradient} rounded-full transition-all duration-1000 ease-out ${isAnimated && isHovered ? 'opacity-100' : 'opacity-80'
                    }`}
                  style={{
                    width: isAnimated ? `${skill.level}%` : '0%',
                    transition: `width 1s ease-out ${index * 150}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Hover Effect - Show More Info */}
        <div className={`mt-6 pt-6 border-t border-border-primary transition-all duration-300 ${isHovered ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
          }`}>
          <p className="text-xs text-text-tertiary italic flex items-center justify-center gap-2">
            <FaArrowRight className="text-primary" />
            Click to view projects and details
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;