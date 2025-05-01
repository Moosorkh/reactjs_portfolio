# Mehdi Azar | Full Stack Developer Portfolio

## Overview

This portfolio is a responsive React web application, built with TailwindCSS and modern web technologies to highlight Mehdi Azar's professional journey, technical expertise, and key projects. It integrates smooth page transitions, dynamic content, and responsive designs optimized for performance across various devices.

## Project Structure and Features

### Application Structure
- **React Router DOM**: Implements client-side routing for seamless navigation.
- **React Transition Group**: Provides animated transitions between pages for enhanced UX.
- **TailwindCSS & PostCSS**: Facilitates rapid development with utility-first CSS framework.

### Pages & Components

#### Animated Routes (`App.jsx`)
```jsx
<TransitionGroup>
  <CSSTransition key={location.key} classNames="fade" timeout={300}>
    <Routes location={location}>
      <Route path="/" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </CSSTransition>
</TransitionGroup>
```

#### Navbar with Active Link Highlight (`Navbar.jsx`)
```jsx
<ul className="flex space-x-8">
  <li>
    <NavLink to="/" active={isCurrentPath("/")}>About Me</NavLink>
  </li>
  <li>
    <NavLink to="/portfolio" active={isCurrentPath("/portfolio")}>Portfolio</NavLink>
  </li>
  <li>
    <NavLink to="/resume" active={isCurrentPath("/resume")}>Resume</NavLink>
  </li>
  <li>
    <NavLink to="/contact" active={isCurrentPath("/contact")}>Contact</NavLink>
  </li>
</ul>
```

#### Dynamic Tech Icons (`TechIcon.jsx`)
```jsx
const getIcon = () => {
  if (icon.startsWith("Fa")) {
    const IconComponent = FaIcons[icon];
    return <IconComponent color={color} size={size} />;
  } else if (icon.startsWith("Si")) {
    const IconComponent = SiIcons[icon];
    return <IconComponent color={color} size={size} />;
  }
};
```

### Advanced Features

#### Dark Reader Compatibility (`index.css`)
```css
html.darkreader .text-transparent.bg-clip-text {
  background: none !important;
  color: #5f9bff !important;
}
```

#### Smooth Page Transitions (`transition.css`)
```css
.fade-enter { opacity: 0; transform: translateX(100%); }
.fade-enter-active { opacity: 1; transform: translateX(0); transition: opacity 300ms, transform 300ms; }
.fade-exit-active { opacity: 0; transform: translateX(-100%); transition: opacity 300ms, transform 300ms; }
```

## Setup and Installation

Clone the repository and set up dependencies:

```bash
git clone https://github.com/Moosorkh/reactjs_portfolio.git
cd reactjs_portfolio
npm install
```

Run the development server:

```bash
npm run dev
```

## Project Dependencies

### Core
- React, React DOM, React Router DOM, TailwindCSS, PostCSS, Vite

### Libraries & Plugins
- React Transition Group, Remix Icon React, React Icons, EmailJS, MUI

### Development Tools
- ESLint, Autoprefixer, Type Definitions

## Deployment
Optimized for deployment on platforms like Vercel or Netlify with integrated SEO meta tags.

## Project Highlights

- **Map Search Toggle**: Interactive filtering and responsive design.
- **Invoice Tracker**: Full-stack CRUD, JWT authentication, PDF exports.
- **Weather Dashboard**: React/NestJS/PostgreSQL weather app with forecasts.
- **Mary Éclair Pâtisserie**: Custom Shopify store with SEO.

## Technologies Utilized

**Frontend**: HTML5, CSS3, JavaScript, TypeScript, ReactJS, TailwindCSS, Material UI  
**Backend**: NodeJS, ExpressJS, NestJS, C#, ASP.NET, Python  
**Databases**: PostgreSQL, MongoDB, Redis, Prisma ORM  
**DevOps & Tools**: Git, GitHub, Docker, AWS, Cypress  

## Contact Information
- **Email**: Moosorkh@gmail.com
- **LinkedIn**: [Mehdi Azar](https://www.linkedin.com/in/irdmousa/)
- **GitHub**: [Moosorkh](https://github.com/Moosorkh)

## Links
- **GitHub Repository**: [GitHub](https://github.com/Moosorkh/reactjs_portfolio)
- **Live Demo**: [Portfolio](https://moosorkh.com)