// Import project images
import builderMedia from "../../../../assets/builder-media.webp";
import sweetCreations from "../../../../assets/sweetCreations.png";
import productPresenterImage from "../../../../assets/product-presenter.jpg";
import WestsideDentalImage from "../../../../assets/westside-dental.png";
import FamilyFirstDentalImage from "../../../../assets/family-first-dental.png";
import WilliamAndrewsLawImage from "../../../../assets/william-andrews-law.png";
import LandingPageBuilderImage from "../../../../assets/landing-page-builder.png";

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
    title: "Builder.media demo home page",
    description: "",
    image: builderMedia,
    featured: true,
    tags: ["React", "JavaScript", "Leaflet", "CSS"],
    links: {
      github: "https://github.com/Moosorkh/builder.media-demo.git",
      liveDemo: "https://buildermedia-demo.vercel.app/",
    },
    color: "blue",
  },
  {
    id: "westside-aesthetic-dentistry",
    title: "Westside Aesthetic Dentistry",
    description: "A custom WordPress website for an aesthetic and general dentistry practice in Playa Vista. Delivers a full service hub — cosmetic and restorative dentistry, implants, crowns, whitening, dental Botox, and airway evaluations — with online booking, patient portal integration, and SEO-optimized service pages.",
    image: WestsideDentalImage,
    tags: ["WordPress", "PHP", "Web Design", "SEO", "Responsive Design", "Custom Theme"],
    links: {
      github: null,
      liveDemo: "https://westsideaesstg.wpenginepowered.com/",
    },
    status: "Client Work",
    color: "green",
    badge: "WordPress",
  },
  {
    id: "family-first-dental",
    title: "Family First Dental",
    description: "A multi-location WordPress website for a family dental practice with five offices across the Tri-Cities area. Covers the full care spectrum — pediatric, general, cosmetic, Invisalign, and implants — with pay-online billing, location landing pages, online scheduling, and a strong local SEO footprint.",
    image: FamilyFirstDentalImage,
    tags: ["WordPress", "PHP", "Local SEO", "Multi-location", "Responsive Design"],
    links: {
      github: null,
      liveDemo: "https://firstdenta2stg.wpenginepowered.com/",
    },
    status: "Client Work",
    color: "green",
    badge: "WordPress",
  },
  {
    id: "william-andrews-law",
    title: "William Andrews Law",
    description: "A conversion-focused legal website for a personal injury attorney in Salt Lake City. Comprehensive practice-area casework pages for car, truck, and motorcycle accidents, wrongful death, and premises liability — plus location landing pages, case results, client reviews, and a prominent call-to-action that converts new-case inquiries.",
    image: WilliamAndrewsLawImage,
    tags: ["WordPress", "PHP", "Conversion Design", "SEO", "Responsive Design", "Legal"],
    links: {
      github: null,
      liveDemo: "https://williamenocstg.wpenginepowered.com/",
    },
    status: "Client Work",
    color: "blue",
    badge: "Legal",
  },
  {
    id: "landing-page-builder",
    title: "SEO Website Builder Platform",
    description: "A self-serve SEO landing page builder. The admin console manages sites, pages, versions, and SEO metadata, then publishes instant, indexable landing pages — deployed as a serverless Cloudflare Worker.",
    image: LandingPageBuilderImage,
    tags: ["Next.js", "React", "Cloudflare Workers", "SaaS", "SEO"],
    links: {
      github: null,
      liveDemo: "https://landing-page-builder.moosorkh.workers.dev/admin",
    },
    color: "blue",
    badge: "Platform",
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
