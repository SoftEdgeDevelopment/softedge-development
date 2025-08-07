"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Code, Database, Server, Smartphone, Zap, Shield, X, Award, Calendar, Globe, Star, Users, Target, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Cosmic Plinko",
    image: "/assets/cosmic-plinko.png",
    url: "https://bovadacosmicplinkochallange.netlify.app",
    category: "PWA",
    description:
      "🏆 1st Place Winner of the $5,000 #BovadaPlinkoChallenge! Cosmic Plinko is a fast, cosmic-themed PWA game featuring realistic ball physics, turbo mode, immersive audio, and a mobile-friendly experience — all playable directly in the browser, downloadable as a PWA.",
    longDescription:
      "Cosmic Plinko is a space-themed, browser-based Plinko game that won 1st place 🏆 in the $5,000 #BovadaPlinkoChallenge. The game combines fast-paced, physics-based ball simulation with electric multipliers, free drops, and immersive audio for a fully polished arcade experience. Built with modern web technologies including Next.js, TypeScript, Canvas API, and Web Audio API, it features realistic ball physics with simulated gravity, bounce, velocity, and randomness. The game includes electric multiplier lines that boost prizes by 2x–5x with stackable multiplier zones, free drops mode for bonus balls and extra payouts, turbo mode for 2x speed gameplay, and a live balance tracker for real-time tracking of wins, losses, and bets. As a Progressive Web App, it works offline and is installable on both mobile and desktop devices.",
    technologies: [
      "Next.js",
      "TypeScript",
      "PWA",
      "Canvas API",
      "Web Audio API",
      "Service Workers",
      "TailwindCSS",
      "HTML5",
      "CSS3",
      "Netlify",
    ],
    features: [
      "Realistic Ball Physics Engine",
      "Electric Multiplier Lines (2x-5x)",
      "Free Drops Bonus Mode",
      "Turbo Mode (2x Speed)",
      "Immersive Web Audio",
      "Progressive Web App (PWA)",
      "Offline Support",
      "Mobile & Desktop Compatible",
      "Live Balance Tracking",
      "Cosmic Theme & Particle Effects",
    ],
    metrics: {
      "Challenge Placement": "1st Place 🏆",
      "Prize Won": "$5,000",
      "PWA Score": "95/100",
      Performance: "< 1s load time",
      "Mobile Compatible": "100%",
    },
    timeline: "2 months",
    role: "Full Stack PWA Developer & Game Designer",
    challenges:
      "Creating a high-performance, physics-based game that runs smoothly across all devices while implementing complex multiplier systems, audio synchronization, and PWA functionality for offline play.",
    solutions:
      "Utilized Canvas API for optimized rendering, implemented efficient physics calculations with requestAnimationFrame, integrated Web Audio API for immersive sound, and leveraged service workers for reliable offline functionality and PWA installation.",
  },
  {
    id: 2,
    title: "SoftEdge Development",
    image: "/assets/softedge-updated.png",
    url: "https://softedgedevelopment.com",
    category: "Web Development",
    description:
      "A comprehensive business website for SoftEdge Development, showcasing full-stack development, QA automation, and UX design services. Built with modern technologies and optimized for performance.",
    longDescription:
      "SoftEdge Development represents a modern business website built with Next.js 15 and React 19, showcasing professional web development services. The site features a clean, responsive design with three main service areas: full-stack web development, quality assurance automation, and user experience design. Built with TypeScript for type safety and Tailwind CSS for consistent styling, the website demonstrates modern frontend development practices. The site includes dynamic routing, server-side rendering for improved SEO, and optimized performance. Features include service showcases, contact forms, responsive navigation, and professional portfolio displays. The design emphasizes user experience with smooth animations, intuitive navigation, and mobile-first responsive layouts.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "HTML5", "CSS3"],
    features: [
      "Responsive Design System",
      "Server-Side Rendering",
      "Service Portfolio Showcase",
      "Contact Form Integration",
      "SEO Optimization",
      "Mobile-First Design",
    ],
    metrics: {
      "Lighthouse Score": "98/100",
      "Page Load Time": "< 2s",
      "Mobile Responsive": "100%",
    },
    timeline: "3 months",
    role: "Frontend Developer & Designer",
    challenges:
      "Creating a professional business website that effectively communicates technical services while maintaining fast loading times and excellent user experience across all devices.",
    solutions:
      "Implemented Next.js for optimal performance, used Tailwind CSS for consistent styling, and focused on clean design principles with strategic use of animations and responsive layouts.",
  },
  {
    id: 3,
    title: "Vibez Tune Music App",
    image: "/assets/project-13.png",
    url: "https://vibez-tune-music-app.onrender.com",
    category: "Fullstack",
    description:
      "Explore and save your favorite songs 🎶 view lyrics, and create a personalized library. Built with the MERN stack, Apollo GraphQL, and JWT for secure authentication.",
    longDescription:
      "Vibez Tune is a full-stack music application built with the MERN stack and Apollo GraphQL. Users can search for music, view song lyrics through the Lyrics OVH API integration, and create personalized music libraries. The application features secure user authentication with JWT tokens, allowing users to save favorite songs and manage personal playlists. Built with React for the frontend, Node.js and Express.js for the backend, MongoDB for data storage, and Apollo GraphQL for efficient data management. The app includes responsive design, real-time search functionality, and seamless user experience across devices.",
    technologies: ["React", "Node.js", "GraphQL", "JWT", "Apollo", "MongoDB", "Express.js", "Vite", "Lyrics OVH API"],
    features: [
      "Music Search & Discovery",
      "Lyrics Integration",
      "Personal Music Library",
      "JWT Authentication",
      "Apollo GraphQL Data Layer",
      "Responsive Design",
    ],
    metrics: {
      "API Response Time": "< 500ms",
      "User Sessions": "15+ min avg",
      "Database Queries": "< 200ms",
    },
    timeline: "6 months",
    role: "Full Stack Developer",
    challenges:
      "Integrating multiple APIs (music search and lyrics) while maintaining fast performance and implementing secure user authentication for personal music libraries.",
    solutions:
      "Used Apollo GraphQL for efficient data fetching, implemented JWT for secure authentication, and optimized API calls with proper caching strategies.",
  },
  {
    id: 4,
    title: "ORM E-commerce Backend",
    image: "/assets/project-05.png",
    url: "https://github.com/BrockAltug/orm-ecom-backend",
    category: "Backend",
    description:
      "E-Commerce Backend 🛒 solution for managing an e-commerce platform. This API supports categories, products, tags, and their relationships, built using Node.js, Express.js, Sequelize, and PostgreSQL.",
    longDescription:
      "A comprehensive e-commerce backend API built with Node.js, Express.js, and PostgreSQL using Sequelize ORM. The system manages complex relationships between products, categories, and tags through a well-structured relational database. Features include full CRUD operations for all entities, proper database associations, and RESTful API endpoints. The application demonstrates advanced Sequelize usage with associations, validations, and database migrations. Includes comprehensive API testing with Insomnia and follows MVC architecture patterns for maintainable code structure.",
    technologies: ["Node.js", "Express.js", "Sequelize", "PostgreSQL", "Dotenv", "Insomnia"],
    features: [
      "RESTful API Endpoints",
      "Product Catalog Management",
      "Category & Tag Relationships",
      "CRUD Operations",
      "Database Associations",
      "API Testing Suite",
    ],
    metrics: {
      "API Response Time": "< 300ms",
      "Database Queries": "< 150ms",
      "Test Coverage": "85%",
    },
    timeline: "2 months",
    role: "Backend Developer",
    challenges:
      "Designing complex many-to-many relationships between products, categories, and tags while ensuring optimal database performance and maintaining data integrity.",
    solutions:
      "Implemented proper Sequelize associations with junction tables, created efficient database indexes, and established comprehensive validation rules.",
  },
  {
    id: 5,
    title: "Express Note Taker",
    image: "/assets/project-09.png",
    url: "https://note-taker-2l31.onrender.com",
    category: "Fullstack",
    description:
      "A simple and efficient 📝 note taking application for creating, viewing, and managing notes. Built with Node.js and Express.js, it features persistent storage and an intuitive interface.",
    longDescription:
      "Express Note Taker is a full-stack note management application built with Node.js and Express.js. The app provides a clean interface for creating, viewing, editing, and deleting notes with persistent file system storage. Features include unique note identification using UUID, RESTful API endpoints, and responsive frontend design. The application demonstrates server-side routing, file system operations, and frontend-backend integration. Built with vanilla JavaScript for the frontend and Express.js for the backend, showcasing fundamental full-stack development concepts.",
    technologies: ["Node.js", "Express.js", "HTML5", "CSS3", "JavaScript", "UUID", "File System API"],
    features: [
      "Note Creation & Editing",
      "Persistent File Storage",
      "RESTful API Design",
      "UUID-based Note IDs",
      "Responsive Interface",
      "Real-time Updates",
    ],
    metrics: {
      "Page Load Time": "< 1s",
      "File Operations": "< 100ms",
      Uptime: "99%",
    },
    timeline: "3 weeks",
    role: "Full Stack Developer",
    challenges:
      "Implementing reliable file system operations for data persistence while ensuring data integrity and providing a smooth user experience without a traditional database.",
    solutions:
      "Used UUID for unique identifiers, implemented atomic file operations, and created efficient JSON-based storage with proper error handling.",
  },
  {
    id: 6,
    title: "YourSpace Social Media Platform",
    image: "/assets/project-06.png",
    url: "https://yourspace-4rjs.onrender.com",
    category: "Fullstack",
    description:
      "YourSpace 🌐 is an interactive social media platform designed to foster meaningful connections through features like personalized profiles, posts, comments, and real-time engagement.",
    longDescription:
      "YourSpace is a full-featured social media platform built with Node.js, Express.js, and PostgreSQL. The application provides complete social networking functionality including user registration and authentication, personalized profiles, post creation and management, and interactive commenting systems. Built with Handlebars.js for server-side templating, Sequelize ORM for database management, and Bcrypt for secure password hashing. Features include file upload capabilities with Multer, session-based authentication, and responsive design for optimal user experience across all devices.",
    technologies: ["Node.js", "PostgreSQL", "Express.js", "Sequelize", "Handlebars.js", "Bcrypt", "Multer"],
    features: [
      "User Authentication & Profiles",
      "Post Creation & Management",
      "Interactive Comments",
      "File Upload System",
      "Session Management",
      "Responsive Design",
    ],
    metrics: {
      "Page Load Time": "< 2s",
      "Database Queries": "< 250ms",
      "User Engagement": "8+ min avg",
    },
    timeline: "5 months",
    role: "Full Stack Developer",
    challenges:
      "Building a scalable social media platform with secure user authentication, file uploads, and real-time interactions while maintaining good performance.",
    solutions:
      "Implemented efficient database schemas, used Multer for secure file handling, and optimized queries with proper indexing and caching strategies.",
  },
  {
    id: 7,
    title: "SEO Roadmap Guide",
    image: "/assets/project-07.png",
    url: "https://softedgedevelopment.github.io/seo-roadmap/",
    category: "Tools",
    description:
      "An open-source SEO guide designed to simplify the process of learning and implementing SEO strategies. A comprehensive roadmap for beginners, business owners, and developers.",
    longDescription:
      "The SEO Roadmap is a comprehensive educational resource built as a static website using HTML5, CSS3, and JavaScript. This open-source guide provides structured learning paths for SEO implementation, covering keyword research, on-page optimization, technical SEO, and content strategy. The project demonstrates technical writing skills, information architecture, and frontend development. Features include interactive navigation, progress tracking, practical examples, and responsive design. Hosted on GitHub Pages, the guide serves as both an educational resource and a showcase of documentation and frontend development skills.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GitHub Pages", "Markdown", "Git"],
    features: [
      "Comprehensive SEO Guide",
      "Interactive Learning Path",
      "Responsive Documentation",
      "Open Source Community",
      "GitHub Pages Hosting",
      "Progressive Enhancement",
    ],
    metrics: {
      "Lighthouse Score": "96/100",
      "Page Load Time": "< 1.5s",
      "Mobile Friendly": "100%",
    },
    timeline: "6 weeks",
    role: "Technical Writer & Frontend Developer",
    challenges:
      "Creating comprehensive educational content that remains current with SEO best practices while building an intuitive, accessible learning platform.",
    solutions:
      "Developed modular content structure, implemented responsive design principles, and created an open-source approach for community contributions and updates.",
  },
  {
    id: 8,
    title: "NoSQL Social Network API",
    image: "/assets/project-01.png",
    url: "https://github.com/BrockAltug/social-network-api",
    category: "Backend",
    description:
      "🌐 A NoSQL-based Social Network API backend solution for managing users, thoughts, reactions, and friend lists, built with Node.js, Express, MongoDB, and Mongoose.",
    longDescription:
      "A comprehensive NoSQL-based API designed for social networking applications using MongoDB and Mongoose ODM. The API provides full CRUD operations for users, thoughts (posts), reactions, and friend connections. Built with Node.js and Express.js, the application demonstrates advanced MongoDB operations, schema design, and RESTful API development. Features include user management, thought creation with timestamps, reaction systems, friend list management, and efficient NoSQL queries. The project showcases document-based database design and modern backend development practices.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Dotenv", "Insomnia"],
    features: [
      "User Management System",
      "Thought/Post Operations",
      "Reaction Management",
      "Friend Connection System",
      "NoSQL Data Modeling",
      "RESTful API Design",
    ],
    metrics: {
      "API Response Time": "< 200ms",
      "Database Operations": "< 100ms",
      "Test Coverage": "80%",
    },
    timeline: "6 weeks",
    role: "Backend API Developer",
    challenges:
      "Designing flexible NoSQL schemas for complex social networking relationships while maintaining optimal query performance in a document-based database.",
    solutions:
      "Implemented efficient Mongoose schemas with proper indexing, used MongoDB aggregation pipelines for complex queries, and created comprehensive API documentation.",
  },
  {
    id: 9,
    title: "MERN Book Search Engine",
    image: "/assets/project-02.png",
    url: "https://mern-book-search-engine-kisn.onrender.com",
    category: "Fullstack",
    description:
      "📚 MERN Book Search Engine refactored with GraphQL and Apollo: Search, save, and manage books seamlessly. Fully deployed on Render with MongoDB Atlas.",
    longDescription:
      "A full-stack book search application built with the MERN stack and refactored to use GraphQL with Apollo Server and Client. Users can search for books using the Google Books API, create accounts, and save books to personal collections. The application demonstrates the transition from RESTful APIs to GraphQL, showcasing modern data fetching patterns. Features include JWT authentication, MongoDB Atlas integration, React hooks for state management, and responsive design. Deployed on Render with full CI/CD pipeline integration.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "GraphQL",
      "Apollo Server",
      "JWT",
      "Google Books API",
      "MongoDB Atlas",
      "React Hooks",
    ],
    features: [
      "Book Search via Google Books API",
      "User Authentication with JWT",
      "Personal Book Collections",
      "GraphQL Data Layer",
      "MongoDB Atlas Integration",
      "Responsive React Interface",
    ],
    metrics: {
      "API Response Time": "< 400ms",
      "Database Queries": "< 200ms",
      "Search Results": "< 1s",
    },
    timeline: "8 weeks",
    role: "Full Stack Developer",
    challenges:
      "Refactoring a REST API to GraphQL while maintaining functionality and integrating external APIs with efficient data fetching and user authentication.",
    solutions:
      "Implemented Apollo GraphQL with optimized resolvers, integrated Google Books API efficiently, and used JWT for secure authentication with MongoDB Atlas.",
  },
  {
    id: 10,
    title: "MVC Tech Blog",
    image: "/assets/project-03.png",
    url: "https://mvc-tech-blog-bzaw.onrender.com/",
    category: "Fullstack",
    description:
      "MVC Tech Blog 🖥️ CMS-style blog built with the MVC architecture, where developers can publish posts, comment, and share their thoughts on tech.",
    longDescription:
      "A comprehensive blogging platform built following the Model-View-Controller (MVC) architectural pattern. The application provides a complete content management system where developers can create accounts, publish blog posts, and engage through comments. Built with Node.js, Express.js, and PostgreSQL using Sequelize ORM, with Handlebars.js for templating. Features include user authentication with express-session, CRUD operations for posts and comments, and responsive design. The project demonstrates proper MVC architecture implementation and full-stack development best practices.",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Sequelize", "Handlebars.js", "Express-session", "Bcrypt"],
    features: [
      "MVC Architecture Pattern",
      "User Authentication System",
      "Blog Post Management",
      "Interactive Comments",
      "Session-based Auth",
      "Responsive Design",
    ],
    metrics: {
      "Page Load Time": "< 2s",
      "Database Queries": "< 300ms",
      "Session Management": "Secure",
    },
    timeline: "7 weeks",
    role: "Full Stack Developer",
    challenges:
      "Implementing a clean MVC architecture while ensuring secure user authentication and creating an engaging blogging platform with proper session management.",
    solutions:
      "Used Handlebars.js for clean view separation, implemented secure session-based authentication, and created efficient database relationships for posts and comments.",
  },
  {
    id: 11,
    title: "PWA Text Editor (JATE)",
    image: "/assets/project-04.png",
    url: "https://pwa-text-editor-ewu6.onrender.com",
    category: "PWA",
    description:
      "JATE - Just Another Text Editor 📝 Progressive Web Application (PWA) text editor that works online and offline. Features IndexedDB for data persistence, service worker for caching, and Webpack for bundling.",
    longDescription:
      "JATE (Just Another Text Editor) is a Progressive Web Application built with modern web technologies including service workers, IndexedDB, and Webpack. The application provides a seamless text editing experience that works both online and offline, with automatic data persistence and installable PWA capabilities. Features include IndexedDB for client-side storage, service worker for caching and offline functionality, Webpack for module bundling, and Workbox for PWA optimization. The app demonstrates advanced PWA concepts and modern JavaScript development practices.",
    technologies: ["JavaScript", "IndexedDB", "Service Workers", "Webpack", "Workbox", "PWA", "Express.js", "Babel"],
    features: [
      "Offline Text Editing",
      "IndexedDB Data Persistence",
      "Service Worker Caching",
      "Installable PWA",
      "Webpack Bundling",
      "Cross-platform Compatibility",
    ],
    metrics: {
      "PWA Score": "95/100",
      "Offline Capability": "100%",
      "Install Rate": "High",
    },
    timeline: "5 weeks",
    role: "PWA Developer",
    challenges:
      "Creating a seamless offline experience with reliable data persistence while implementing advanced PWA features and ensuring cross-platform compatibility.",
    solutions:
      "Implemented robust service worker strategies, used IndexedDB for reliable offline storage, and utilized Workbox for optimal PWA performance and caching.",
  },
  {
    id: 12,
    title: "SQL Employee Tracker",
    image: "/assets/project-08.png",
    url: "https://brockaltug.github.io/sql-employee-tracker/",
    category: "Backend",
    description:
      "Content management system command-line application to manage a company's 🧑‍🧒 employee database, using Node.js, Inquirer, and PostgreSQL.",
    longDescription:
      "A comprehensive command-line interface (CLI) application for managing employee databases built with Node.js, Inquirer.js, and PostgreSQL. The application provides full CRUD operations for employees, departments, and roles with an intuitive command-line interface. Features include interactive prompts for data entry, relational database management, and comprehensive reporting capabilities. The project demonstrates CLI development, database design, and asynchronous programming concepts with proper error handling and data validation.",
    technologies: ["Node.js", "JavaScript", "PostgreSQL", "Inquirer.js", "Console.table", "Dotenv"],
    features: [
      "Interactive CLI Interface",
      "Employee Database Management",
      "Department & Role Tracking",
      "CRUD Operations",
      "Relational Database Design",
      "Data Reporting",
    ],
    metrics: {
      "Query Response Time": "< 100ms",
      "CLI Response Time": "< 50ms",
      "Data Accuracy": "100%",
    },
    timeline: "4 weeks",
    role: "Backend Developer",
    challenges:
      "Designing an intuitive CLI interface for complex database operations while ensuring data integrity and providing efficient query performance.",
    solutions:
      "Used Inquirer.js for user-friendly prompts, implemented proper PostgreSQL relationships, and created efficient queries with console.table for data visualization.",
  },
  {
    id: 13,
    title: "Weather Dashboard",
    image: "/assets/project-10.png",
    url: "https://brockaltug.github.io/server-side-api-weather-dashboard/",
    category: "Frontend",
    description:
      "Dynamic weather dashboard 🌦️ that allows users to search for cities and view current weather conditions and a 5-day forecast using the OpenWeatherMap API.",
    longDescription:
      "A responsive weather dashboard application built with vanilla JavaScript, HTML5, and CSS3 that integrates with the OpenWeatherMap API. Users can search for cities to view current weather conditions and 5-day forecasts with detailed weather information. Features include local storage for search history, responsive design for all devices, and dynamic content updates. The application demonstrates API integration, asynchronous JavaScript, local storage usage, and responsive web design principles.",
    technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeatherMap API", "Local Storage", "Bootstrap"],
    features: [
      "City Weather Search",
      "5-Day Weather Forecast",
      "Current Weather Conditions",
      "Search History Storage",
      "Responsive Design",
      "API Integration",
    ],
    metrics: {
      "API Response Time": "< 1s",
      "Page Load Time": "< 2s",
      "Mobile Responsive": "100%",
    },
    timeline: "3 weeks",
    role: "Frontend Developer",
    challenges:
      "Creating an intuitive weather interface that efficiently displays complex weather data while ensuring fast API responses and maintaining responsive design.",
    solutions:
      "Implemented efficient API caching with local storage, created responsive layouts with CSS Grid and Flexbox, and optimized API calls for better performance.",
  },
  {
    id: 14,
    title: "SVG Logo Maker",
    image: "/assets/project-11.png",
    url: "https://brockaltug.github.io/oop-svg-logo-maker/",
    category: "Tools",
    description:
      "A Node.js command-line tool that allows users to easily create customizable SVG logos by choosing text, colors, and shapes through interactive prompts. 🧪 Includes robust unit testing with Jest.",
    longDescription:
      "A command-line application built with Node.js that generates custom SVG logos through interactive prompts. Users can select shapes (circle, triangle, square), customize colors, and add text to create professional SVG logos. The application demonstrates object-oriented programming principles with class inheritance and polymorphism. Features include comprehensive unit testing with Jest, input validation, and file system operations. The project showcases CLI development, OOP concepts, and test-driven development practices.",
    technologies: ["Node.js", "JavaScript", "SVG", "Inquirer.js", "Jest", "OOP", "File System"],
    features: [
      "Interactive Logo Creation",
      "Multiple Shape Options",
      "Color Customization",
      "Text Integration",
      "SVG File Generation",
      "Unit Testing with Jest",
    ],
    metrics: {
      "Logo Generation": "< 2s",
      "Test Coverage": "90%",
      "CLI Response": "< 100ms",
    },
    timeline: "3 weeks",
    role: "Node.js Developer",
    challenges:
      "Implementing object-oriented design patterns for flexible logo creation while ensuring reliable SVG generation and comprehensive test coverage.",
    solutions:
      "Created modular class hierarchies with inheritance, implemented comprehensive Jest testing suites, and used Inquirer.js for intuitive user interaction.",
  },
  {
    id: 15,
    title: "README Generator",
    image: "/assets/project-12.png",
    url: "https://brockaltug.github.io/nodejs-readme-generator/",
    category: "Tools",
    description:
      "CLI tool that generates a complete 🗒️ README.md file with sections like title, description, installation, usage, and more based on user input.",
    longDescription:
      "A Node.js command-line application that automates the creation of professional README.md files for software projects. The tool uses interactive prompts to gather project information and generates comprehensive documentation with proper markdown formatting. Features include customizable sections, license integration, badge generation, and table of contents creation. The application demonstrates CLI development, file system operations, and template generation concepts with user-friendly interaction design.",
    technologies: ["Node.js", "JavaScript", "Inquirer.js", "File System", "Markdown", "CLI"],
    features: [
      "Interactive README Creation",
      "Markdown Template Generation",
      "License Integration",
      "Badge Generation",
      "Table of Contents",
      "File System Operations",
    ],
    metrics: {
      "Generation Time": "< 30s",
      "Template Accuracy": "100%",
      "User Satisfaction": "High",
    },
    timeline: "2 weeks",
    role: "Node.js Developer & Technical Writer",
    challenges:
      "Creating a flexible template system that generates professional documentation while maintaining ease of use and comprehensive coverage of project details.",
    solutions:
      "Developed modular template architecture, implemented comprehensive prompt validation, and created reusable markdown generation functions with proper formatting.",
  },
]

const skillsWithLinks = [
  // Front-End Development
  {
    name: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    category: "Frontend",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    category: "Frontend",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "JavaScript (ES6+)",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    category: "Frontend",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org/docs/",
    category: "Frontend",
    icon: <Code className="w-3 h-3" />,
  },
  { name: "React", url: "https://react.dev/learn", category: "Frontend", icon: <Code className="w-3 h-3" /> },
  {
    name: "Redux",
    url: "https://redux.js.org/introduction/getting-started",
    category: "Frontend",
    icon: <Code className="w-3 h-3" />,
  },
  { name: "Next.js", url: "https://nextjs.org/docs", category: "Frontend", icon: <Code className="w-3 h-3" /> },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com/docs",
    category: "Frontend",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "Bootstrap",
    url: "https://getbootstrap.com/docs/",
    category: "Frontend",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "SASS",
    url: "https://sass-lang.com/documentation/",
    category: "Frontend",
    icon: <Code className="w-3 h-3" />,
  },
  { name: "jQuery", url: "https://api.jquery.com/", category: "Frontend", icon: <Code className="w-3 h-3" /> },
  { name: "Vue.js", url: "https://vuejs.org/guide/", category: "Frontend", icon: <Code className="w-3 h-3" /> },
  { name: "Angular", url: "https://angular.io/docs", category: "Frontend", icon: <Code className="w-3 h-3" /> },
  {
    name: "Material-UI",
    url: "https://mui.com/material-ui/getting-started/",
    category: "Frontend",
    icon: <Code className="w-3 h-3" />,
  },

  // Back-End Development
  { name: "Python", url: "https://docs.python.org/3/", category: "Backend", icon: <Server className="w-3 h-3" /> },
  { name: "Java", url: "https://docs.oracle.com/en/java/", category: "Backend", icon: <Server className="w-3 h-3" /> },
  { name: "Node.js", url: "https://nodejs.org/en/docs/", category: "Backend", icon: <Server className="w-3 h-3" /> },
  {
    name: "Express.js",
    url: "https://expressjs.com/en/4x/api.html",
    category: "Backend",
    icon: <Server className="w-3 h-3" />,
  },
  { name: "NestJS", url: "https://docs.nestjs.com/", category: "Backend", icon: <Server className="w-3 h-3" /> },
  { name: "GraphQL", url: "https://graphql.org/learn/", category: "Backend", icon: <Server className="w-3 h-3" /> },
  { name: "REST APIs", url: "https://restfulapi.net/", category: "Backend", icon: <Server className="w-3 h-3" /> },
  {
    name: "WebSockets",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
    category: "Backend",
    icon: <Server className="w-3 h-3" />,
  },
  {
    name: "Microservices",
    url: "https://microservices.io/",
    category: "Backend",
    icon: <Server className="w-3 h-3" />,
  },
  { name: "FastAPI", url: "https://fastapi.tiangolo.com/", category: "Backend", icon: <Server className="w-3 h-3" /> },
  {
    name: "Spring Boot",
    url: "https://spring.io/projects/spring-boot",
    category: "Backend",
    icon: <Server className="w-3 h-3" />,
  },

  // Databases & Data Management
  { name: "MongoDB", url: "https://docs.mongodb.com/", category: "Database", icon: <Database className="w-3 h-3" /> },
  {
    name: "PostgreSQL",
    url: "https://www.postgresql.org/docs/",
    category: "Database",
    icon: <Database className="w-3 h-3" />,
  },
  { name: "MySQL", url: "https://dev.mysql.com/doc/", category: "Database", icon: <Database className="w-3 h-3" /> },
  {
    name: "Redis",
    url: "https://redis.io/documentation",
    category: "Database",
    icon: <Database className="w-3 h-3" />,
  },
  {
    name: "SQLite",
    url: "https://www.sqlite.org/docs.html",
    category: "Database",
    icon: <Database className="w-3 h-3" />,
  },
  {
    name: "Mongoose",
    url: "https://mongoosejs.com/docs/",
    category: "Database",
    icon: <Database className="w-3 h-3" />,
  },
  {
    name: "Sequelize",
    url: "https://sequelize.org/docs/v6/",
    category: "Database",
    icon: <Database className="w-3 h-3" />,
  },
  { name: "TypeORM", url: "https://typeorm.io/", category: "Database", icon: <Database className="w-3 h-3" /> },
  {
    name: "Firebase",
    url: "https://firebase.google.com/docs",
    category: "Database",
    icon: <Database className="w-3 h-3" />,
  },
  {
    name: "DynamoDB",
    url: "https://docs.aws.amazon.com/dynamodb/",
    category: "Database",
    icon: <Database className="w-3 h-3" />,
  },
  {
    name: "Cassandra",
    url: "https://cassandra.apache.org/doc/",
    category: "Database",
    icon: <Database className="w-3 h-3" />,
  },

  // Testing & Automation
  {
    name: "Selenium WebDriver",
    url: "https://selenium-python.readthedocs.io/",
    category: "Testing",
    icon: <Shield className="w-3 h-3" />,
  },
  {
    name: "TestNG",
    url: "https://testng.org/doc/documentation-main.html",
    category: "Testing",
    icon: <Shield className="w-3 h-3" />,
  },
  {
    name: "JUnit",
    url: "https://junit.org/junit5/docs/current/user-guide/",
    category: "Testing",
    icon: <Shield className="w-3 h-3" />,
  },
  {
    name: "Cucumber BDD",
    url: "https://cucumber.io/docs/cucumber/",
    category: "Testing",
    icon: <Shield className="w-3 h-3" />,
  },
  { name: "REST Assured", url: "https://rest-assured.io/", category: "Testing", icon: <Shield className="w-3 h-3" /> },
  {
    name: "Postman",
    url: "https://learning.postman.com/docs/",
    category: "Testing",
    icon: <Shield className="w-3 h-3" />,
  },
  {
    name: "Jest",
    url: "https://jestjs.io/docs/getting-started",
    category: "Testing",
    icon: <Shield className="w-3 h-3" />,
  },
  { name: "Mocha", url: "https://mochajs.org/", category: "Testing", icon: <Shield className="w-3 h-3" /> },
  { name: "Chai", url: "https://www.chaijs.com/", category: "Testing", icon: <Shield className="w-3 h-3" /> },
  { name: "Cypress", url: "https://docs.cypress.io/", category: "Testing", icon: <Shield className="w-3 h-3" /> },
  {
    name: "Playwright",
    url: "https://playwright.dev/docs/intro",
    category: "Testing",
    icon: <Shield className="w-3 h-3" />,
  },
  { name: "K6", url: "https://k6.io/docs/", category: "Testing", icon: <Shield className="w-3 h-3" /> },
  {
    name: "JMeter",
    url: "https://jmeter.apache.org/usermanual/",
    category: "Testing",
    icon: <Shield className="w-3 h-3" />,
  },
  { name: "Appium", url: "https://appium.io/docs/en/2.1/", category: "Testing", icon: <Shield className="w-3 h-3" /> },
  {
    name: "LoadRunner",
    url: "https://www.microfocus.com/documentation/loadrunner/",
    category: "Testing",
    icon: <Shield className="w-3 h-3" />,
  },

  // DevOps & Containerization
  { name: "Docker", url: "https://docs.docker.com/", category: "DevOps", icon: <Zap className="w-3 h-3" /> },
  { name: "Kubernetes", url: "https://kubernetes.io/docs/", category: "DevOps", icon: <Zap className="w-3 h-3" /> },
  {
    name: "CI/CD Pipelines",
    url: "https://docs.github.com/en/actions",
    category: "DevOps",
    icon: <Zap className="w-3 h-3" />,
  },
  { name: "Jenkins", url: "https://www.jenkins.io/doc/", category: "DevOps", icon: <Zap className="w-3 h-3" /> },
  {
    name: "GitHub Actions",
    url: "https://docs.github.com/en/actions",
    category: "DevOps",
    icon: <Zap className="w-3 h-3" />,
  },
  { name: "AWS", url: "https://docs.aws.amazon.com/", category: "DevOps", icon: <Zap className="w-3 h-3" /> },
  { name: "GCP", url: "https://cloud.google.com/docs", category: "DevOps", icon: <Zap className="w-3 h-3" /> },
  {
    name: "Azure",
    url: "https://docs.microsoft.com/en-us/azure/",
    category: "DevOps",
    icon: <Zap className="w-3 h-3" />,
  },
  { name: "Terraform", url: "https://www.terraform.io/docs", category: "DevOps", icon: <Zap className="w-3 h-3" /> },
  { name: "Ansible", url: "https://docs.ansible.com/", category: "DevOps", icon: <Zap className="w-3 h-3" /> },
  { name: "CircleCI", url: "https://circleci.com/docs/", category: "DevOps", icon: <Zap className="w-3 h-3" /> },
  {
    name: "Bitbucket Pipelines",
    url: "https://support.atlassian.com/bitbucket-cloud/docs/",
    category: "DevOps",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "Bamboo",
    url: "https://confluence.atlassian.com/bamboo/",
    category: "DevOps",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "CloudFormation",
    url: "https://docs.aws.amazon.com/cloudformation/",
    category: "DevOps",
    icon: <Zap className="w-3 h-3" />,
  },
  { name: "Helm", url: "https://helm.sh/docs/", category: "DevOps", icon: <Zap className="w-3 h-3" /> },
  { name: "Vagrant", url: "https://www.vagrantup.com/docs", category: "DevOps", icon: <Zap className="w-3 h-3" /> },

  // Version Control & Collaboration
  { name: "Git", url: "https://git-scm.com/doc", category: "Tools", icon: <Code className="w-3 h-3" /> },
  { name: "GitHub", url: "https://docs.github.com/", category: "Tools", icon: <Code className="w-3 h-3" /> },
  {
    name: "Bitbucket",
    url: "https://support.atlassian.com/bitbucket-cloud/",
    category: "Tools",
    icon: <Code className="w-3 h-3" />,
  },
  { name: "GitLab", url: "https://docs.gitlab.com/", category: "Tools", icon: <Code className="w-3 h-3" /> },
  { name: "SVN", url: "https://subversion.apache.org/docs/", category: "Tools", icon: <Code className="w-3 h-3" /> },
  {
    name: "Mercurial",
    url: "https://www.mercurial-scm.org/doc/",
    category: "Tools",
    icon: <Code className="w-3 h-3" />,
  },

  // Cloud & Serverless
  {
    name: "AWS Lambda",
    url: "https://docs.aws.amazon.com/lambda/",
    category: "Cloud",
    icon: <Zap className="w-3 h-3" />,
  },
  { name: "AWS EC2", url: "https://docs.aws.amazon.com/ec2/", category: "Cloud", icon: <Zap className="w-3 h-3" /> },
  { name: "AWS S3", url: "https://docs.aws.amazon.com/s3/", category: "Cloud", icon: <Zap className="w-3 h-3" /> },
  { name: "AWS RDS", url: "https://docs.aws.amazon.com/rds/", category: "Cloud", icon: <Zap className="w-3 h-3" /> },
  {
    name: "GCP App Engine",
    url: "https://cloud.google.com/appengine/docs",
    category: "Cloud",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "GCP Functions",
    url: "https://cloud.google.com/functions/docs",
    category: "Cloud",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "Azure Functions",
    url: "https://docs.microsoft.com/en-us/azure/azure-functions/",
    category: "Cloud",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "Serverless Framework",
    url: "https://www.serverless.com/framework/docs/",
    category: "Cloud",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "Firebase Functions",
    url: "https://firebase.google.com/docs/functions",
    category: "Cloud",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "Cloudflare Workers",
    url: "https://developers.cloudflare.com/workers/",
    category: "Cloud",
    icon: <Zap className="w-3 h-3" />,
  },

  // Security & Authentication
  { name: "OAuth", url: "https://oauth.net/2/", category: "Security", icon: <Shield className="w-3 h-3" /> },
  { name: "JWT", url: "https://jwt.io/introduction", category: "Security", icon: <Shield className="w-3 h-3" /> },
  {
    name: "SAML",
    url: "https://docs.oasis-open.org/security/saml/",
    category: "Security",
    icon: <Shield className="w-3 h-3" />,
  },
  { name: "2FA", url: "https://authy.com/what-is-2fa/", category: "Security", icon: <Shield className="w-3 h-3" /> },
  {
    name: "HTTPS",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
    category: "Security",
    icon: <Shield className="w-3 h-3" />,
  },
  {
    name: "SSL/TLS",
    url: "https://www.cloudflare.com/learning/ssl/what-is-ssl/",
    category: "Security",
    icon: <Shield className="w-3 h-3" />,
  },
  {
    name: "CORS",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
    category: "Security",
    icon: <Shield className="w-3 h-3" />,
  },
  {
    name: "OWASP",
    url: "https://owasp.org/www-project-top-ten/",
    category: "Security",
    icon: <Shield className="w-3 h-3" />,
  },
  {
    name: "Penetration Testing",
    url: "https://owasp.org/www-community/Penetration_Testing_Methodologies",
    category: "Security",
    icon: <Shield className="w-3 h-3" />,
  },
  {
    name: "Zero Trust Architecture",
    url: "https://www.nist.gov/publications/zero-trust-architecture",
    category: "Security",
    icon: <Shield className="w-3 h-3" />,
  },

  // Performance Optimization
  {
    name: "Caching",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching",
    category: "Performance",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "Load Balancing",
    url: "https://www.nginx.com/resources/glossary/load-balancing/",
    category: "Performance",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "Compression",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Compression",
    category: "Performance",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "Minification",
    url: "https://developers.google.com/speed/docs/insights/MinifyResources",
    category: "Performance",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "Lazy Loading",
    url: "https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading",
    category: "Performance",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "Code Splitting",
    url: "https://webpack.js.org/guides/code-splitting/",
    category: "Performance",
    icon: <Zap className="w-3 h-3" />,
  },
  {
    name: "Database Indexing",
    url: "https://use-the-index-luke.com/",
    category: "Performance",
    icon: <Database className="w-3 h-3" />,
  },
  {
    name: "Redis Caching",
    url: "https://redis.io/docs/manual/clients/",
    category: "Performance",
    icon: <Database className="w-3 h-3" />,
  },
  {
    name: "CDN Optimization",
    url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/",
    category: "Performance",
    icon: <Zap className="w-3 h-3" />,
  },

  // Agile & Methodologies
  { name: "Agile", url: "https://agilemanifesto.org/", category: "Methodology", icon: <Code className="w-3 h-3" /> },
  { name: "Scrum", url: "https://scrumguides.org/", category: "Methodology", icon: <Code className="w-3 h-3" /> },
  {
    name: "Kanban",
    url: "https://www.atlassian.com/agile/kanban",
    category: "Methodology",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "Jira",
    url: "https://www.atlassian.com/software/jira/guides",
    category: "Tools",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "Confluence",
    url: "https://www.atlassian.com/software/confluence/guides",
    category: "Tools",
    icon: <Code className="w-3 h-3" />,
  },
  { name: "Trello", url: "https://help.trello.com/", category: "Tools", icon: <Code className="w-3 h-3" /> },
  { name: "Asana", url: "https://asana.com/guide", category: "Tools", icon: <Code className="w-3 h-3" /> },
  {
    name: "TDD",
    url: "https://testdriven.io/test-driven-development/",
    category: "Methodology",
    icon: <Shield className="w-3 h-3" />,
  },
  { name: "BDD", url: "https://cucumber.io/docs/bdd/", category: "Methodology", icon: <Shield className="w-3 h-3" /> },
  {
    name: "SAFe",
    url: "https://www.scaledagileframework.com/",
    category: "Methodology",
    icon: <Code className="w-3 h-3" />,
  },

  // Architecture & Design Patterns
  {
    name: "MVC",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/MVC",
    category: "Architecture",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "MVVM",
    url: "https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/mvvm",
    category: "Architecture",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "Microservices Architecture",
    url: "https://microservices.io/patterns/microservices.html",
    category: "Architecture",
    icon: <Server className="w-3 h-3" />,
  },
  {
    name: "RESTful Services",
    url: "https://restfulapi.net/",
    category: "Architecture",
    icon: <Server className="w-3 h-3" />,
  },
  {
    name: "Event-Driven Architecture",
    url: "https://aws.amazon.com/event-driven-architecture/",
    category: "Architecture",
    icon: <Server className="w-3 h-3" />,
  },
  {
    name: "CQRS",
    url: "https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs",
    category: "Architecture",
    icon: <Server className="w-3 h-3" />,
  },
  {
    name: "Domain-Driven Design",
    url: "https://domainlanguage.com/ddd/",
    category: "Architecture",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "Hexagonal Architecture",
    url: "https://alistair.cockburn.us/hexagonal-architecture/",
    category: "Architecture",
    icon: <Code className="w-3 h-3" />,
  },

  // Other Tools & Technologies
  { name: "Nginx", url: "https://nginx.org/en/docs/", category: "Tools", icon: <Server className="w-3 h-3" /> },
  { name: "Apache", url: "https://httpd.apache.org/docs/", category: "Tools", icon: <Server className="w-3 h-3" /> },
  { name: "Vercel", url: "https://vercel.com/docs", category: "Tools", icon: <Zap className="w-3 h-3" /> },
  { name: "Netlify", url: "https://docs.netlify.com/", category: "Tools", icon: <Zap className="w-3 h-3" /> },
  { name: "Heroku", url: "https://devcenter.heroku.com/", category: "Tools", icon: <Zap className="w-3 h-3" /> },
  { name: "WordPress", url: "https://developer.wordpress.org/", category: "CMS", icon: <Code className="w-3 h-3" /> },
  { name: "Shopify", url: "https://shopify.dev/", category: "E-commerce", icon: <Code className="w-3 h-3" /> },
  {
    name: "Contentful",
    url: "https://www.contentful.com/developers/docs/",
    category: "CMS",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "WebRTC",
    url: "https://webrtc.org/getting-started/",
    category: "Communication",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "Socket.IO",
    url: "https://socket.io/docs/v4/",
    category: "Communication",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "Electron.js",
    url: "https://www.electronjs.org/docs/latest/",
    category: "Desktop",
    icon: <Code className="w-3 h-3" />,
  },
  { name: "Figma", url: "https://help.figma.com/", category: "Design", icon: <Code className="w-3 h-3" /> },
  {
    name: "Adobe Photoshop",
    url: "https://helpx.adobe.com/photoshop/user-guide.html",
    category: "Design",
    icon: <Code className="w-3 h-3" />,
  },
  { name: "Blender", url: "https://docs.blender.org/", category: "3D", icon: <Code className="w-3 h-3" /> },
  {
    name: "Tiled",
    url: "https://doc.mapeditor.org/en/stable/",
    category: "Game Dev",
    icon: <Code className="w-3 h-3" />,
  },
  {
    name: "Unity3D",
    url: "https://docs.unity3d.com/Manual/",
    category: "Game Dev",
    icon: <Code className="w-3 h-3" />,
  },
  { name: "Flutter", url: "https://docs.flutter.dev/", category: "Mobile", icon: <Smartphone className="w-3 h-3" /> },
  {
    name: "React Native",
    url: "https://reactnative.dev/docs/getting-started",
    category: "Mobile",
    icon: <Smartphone className="w-3 h-3" />,
  },
]

const coreCompetencies = [
  {
    name: "Software Architecture",
    url: "https://martinfowler.com/architecture/",
  },
  {
    name: "Full Stack Development",
    url: "https://developer.mozilla.org/en-US/docs/Learn",
  },
  {
    name: "Automation Testing",
    url: "https://www.selenium.dev/documentation/",
  },
  {
    name: "API Design",
    url: "https://swagger.io/resources/articles/best-practices-in-api-design/",
  },
  {
    name: "CI/CD Pipelines",
    url: "https://docs.github.com/en/actions/learn-github-actions",
  },
  {
    name: "DevOps Practices",
    url: "https://aws.amazon.com/devops/what-is-devops/",
  },
  {
    name: "Agile Methodologies",
    url: "https://agilemanifesto.org/",
  },
  {
    name: "Cloud-Native Applications",
    url: "https://www.cncf.io/",
  },
  {
    name: "Scalable Microservices",
    url: "https://microservices.io/",
  },
  {
    name: "Security & Authentication",
    url: "https://owasp.org/www-project-top-ten/",
  },
  {
    name: "Performance Optimization",
    url: "https://web.dev/performance/",
  },
  {
    name: "Team Leadership",
    url: "https://www.atlassian.com/agile/scrum/scrum-master",
  },
]

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "SoftEdge Development",
    period: "Jan 2024 - Present",
    type: "REMOTE • FULLTIME",
    description:
      "Spearheaded the development of dynamic, responsive, and mobile-first web applications using React.js, Node.js, and MongoDB. Designed and implemented RESTful APIs and GraphQL endpoints to enable efficient and secure communication between front-end and back-end systems. Enhanced user experiences with modern frameworks like Tailwind CSS and Bootstrap, ensuring accessibility and responsiveness across devices. Developed scalable microservices and implemented server-side rendering with Next.js, improving performance and SEO. Engineered database solutions with PostgreSQL and MongoDB, optimizing query performance and employing Redis for caching in high-traffic applications. Integrated CI/CD pipelines using GitHub Actions and Jenkins for seamless build and deployment workflows. Deployed cloud-native applications using Docker, Kubernetes, AWS, and GCP for resilient and scalable infrastructure. Collaborated with clients to gather requirements, provided regular updates, and delivered intuitive, feature-rich solutions ahead of schedule.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "RESTful APIs",
      "GraphQL",
      "Tailwind CSS",
      "Bootstrap",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
    ],
  },
  {
    title: "QA Engineer",
    company: "BOSS Holding Company LLC",
    period: "Jun 2022 - Dec 2023",
    type: "REMOTE • FULLTIME",
    description:
      "Designed advanced automation frameworks using Java, Selenium WebDriver, TestNG, and Cucumber BDD to streamline testing processes. Developed reusable test scripts, reducing manual testing by 60% and identifying critical defects early. Conducted API testing with REST Assured and Postman, ensuring seamless service integrations. Integrated automation scripts into CI/CD pipelines using Jenkins and GitHub Actions, significantly improving deployment efficiency. Leveraged Docker for containerized testing environments and Cypress for modern web application testing. Provided training sessions on automation testing best practices and authored detailed technical documentation. Led defect tracking and reporting initiatives, enabling rapid issue resolution and improving overall software quality.",
    technologies: [
      "Java",
      "Selenium WebDriver",
      "TestNG",
      "Cucumber BDD",
      "REST Assured",
      "Postman",
      "Docker",
      "Cypress",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    title: "QA Intern",
    company: "Mersys.io",
    period: "Jan 2022 - Jun 2022",
    type: "REMOTE • INTERNSHIP",
    description:
      'Developed automated test suites using Java, Selenium, and Maven, enhancing the quality of software "Developed automated test suites using Java, Selenium, and Maven, enhancing the quality of software releases. Executed cross-browser testing using Selenium Grid, ensuring consistent performance across platforms. Implemented BDD with Cucumber, creating clear test scenarios aligned with business requirements. Validated APIs using Postman and contributed to Agile sprint cycles, ensuring timely delivery of high-quality software. Documented testing processes, created detailed reports, and provided actionable insights for improvement.',
    technologies: ["Java", "Selenium", "Maven", "Cucumber", "Selenium Grid", "Postman"],
  },
  {
    title: "Junior IT Specialist",
    company: "BOSS Holding Company LLC",
    period: "Oct 2020 - Dec 2021",
    type: "ON-SITE • FULLTIME",
    description:
      "Provided technical support for end users, assisting in troubleshooting hardware, software, and network-related issues to ensure operational efficiency. Installed, configured, and maintained workstations, ensuring up-to-date system software and security patches. Conducted routine system audits to identify and resolve performance bottlenecks, improving reliability and minimizing downtime. Assisted in the migration of legacy systems to cloud-based platforms, enhancing data accessibility and security. Maintained detailed documentation of IT assets, troubleshooting steps, and resolved technical issues to streamline future support requests.",
    technologies: [
      "Technical Support",
      "System Configuration",
      "Network Troubleshooting",
      "Cloud Migration",
      "IT Asset Management",
      "System Audits",
    ],
  },
]

const certifications = [
  {
    id: 1,
    name: "Certified Full Stack Web Developer",
    org: "University of California, Berkeley - Jan 2025",
    image: "/assets/uc-berkeley-certificate.png",
    description:
      "Comprehensive full-stack web development bootcamp covering modern technologies including React.js, Node.js, Express.js, MongoDB, GraphQL, Docker, Kubernetes, and CI/CD pipelines. Completed intensive 24-week program with hands-on projects and real-world applications.",
    skills: ["React.js", "Node.js", "MongoDB", "Express.js", "GraphQL", "Docker", "Kubernetes", "CI/CD Pipelines"],
  },
  {
    id: 2,
    name: "Certified Software Developer and Engineer in Testing (SDET)",
    org: "Mersys.io - Jul 2023",
    image: "/assets/sdet-certificate.png",
    description:
      "Intensive 6-month (600 hours) SDET program covering comprehensive automation testing frameworks, API testing, and quality assurance methodologies. Specialized in Java, Selenium WebDriver, TestNG, Cucumber BDD, and CI/CD integration.",
    skills: [
      "Java",
      "Selenium WebDriver",
      "TestNG",
      "Cucumber BDD",
      "REST Assured",
      "Postman",
      "Jenkins",
      "GitHub Actions",
    ],
  },
  {
    id: 3,
    name: "Certified in Agile Development and Team Collaboration",
    org: "Various Online Platforms - Oct 2022",
    image: null,
    description:
      "Comprehensive training in Agile methodologies, Scrum framework, and team collaboration tools. Focused on project management, sprint planning, and effective team communication in software development environments.",
    skills: ["Agile", "Scrum", "Kanban", "Jira", "Team Leadership", "Project Management"],
  },
  {
    id: 4,
    name: "Certified in Java Programming and Automation Testing",
    org: "Self-Learning & Online Courses - Apr 2022",
    image: null,
    description:
      "Self-directed learning program covering Java programming fundamentals, object-oriented programming concepts, and automation testing principles. Completed through various online platforms and practical projects.",
    skills: ["Java", "OOP", "Data Structures", "Algorithms", "Unit Testing", "Test Automation"],
  },
]

const resumeContent = `Brock Altug 
Seattle, Washington, USA  
altugba99@gmail.com | (206) 739-7583 
linkedin.com/in/brock-altug 
softedgedevelopment.com/brock-altug  
github.com/BrockAltug 
Full Stack Developer | QA Automation Engineer 
Experienced in building full-stack web apps, developing APIs, and automating software testing. Skilled with 
modern JavaScript frameworks, backend systems, cloud platforms, and CI/CD pipelines. Focused on writing clean, scalable 
code and shipping reliable features fast. Strong in both development and testing, with hands-on experience across the full 
product lifecycle. 
Technical Skills 
——————————————————————————————————————————— 
Frontend: JavaScript (ES6+), TypeScript, React.js, Next.js, Vue.js, Angular, Tailwind CSS, Bootstrap, HTML5, CSS3 
Backend: Node.js, Express.js, NestJS, Flask, Django, FastAPI, Spring Boot 
APIs: REST, GraphQL, WebSockets, Axios, Microservices, JSON, Postman 
Databases: PostgreSQL, MongoDB, MySQL, SQLite, Redis, Firebase, DynamoDB 
Testing: Selenium WebDriver, Cypress, Playwright, Jest, Mocha, Chai, JUnit, TestNG, Cucumber BDD, REST Assured 
DevOps & CI/CD: AWS (EC2, Lambda, S3, RDS), Google Cloud Platform, Azure, Docker, Kubernetes, GitHub Actions, 
Jenkins, CircleCI, Bitbucket Pipelines 
Tools & Workflow: Git, GitHub, VS Code, Linux CLI, Nginx, Agile/Scrum, Jira, Trello, Figma 
Professional Experience 
——————————————————————————————————————————— 
Full Stack Developer | Limelight Networks | Remote | Jan 2024 – Jan 2025 
Built full-stack applications using React.js, Next.js, and Node.js. 
Developed and optimized RESTful and GraphQL APIs for data handling. 
Deployed microservices with Docker and Kubernetes on AWS. 
Managed CI/CD pipelines with GitHub Actions and Jenkins. 
QA Engineer | Lexicon Dynamics Inc. | Remote | Jun 2022 – Dec 2023 
Created automation frameworks using Java, Selenium, and TestNG. 
Tested APIs with Postman and REST Assured across multiple environments. 
Integrated tests into Jenkins pipelines for continuous delivery. 
Performed UI and performance testing with Cypress and JMeter. 
QA Intern | Amazon Web Services (AWS) | Seattle, WA | Jan 2022 – Jun 2022 with Cypress and JMeter.
QA Intern | Amazon Web Services (AWS) | Seattle, WA | Jan 2022 – Jun 2022
Built automated UI test scripts using Java, Selenium, and Maven.
Created BDD-style test cases in Cucumber for internal tools and dashboards.
Validated REST APIs using Postman and integrated tests into CI pipelines.
Ran cross-browser tests and contributed to sprint QA cycles.
IT Support Specialist | Symetra Life Insurance Company | Bellevue, WA | Oct 2020 – Dec 2021
Provided technical support for employee workstations and internal systems.
Assisted with infrastructure migration to AWS and Azure environments.
Resolved service tickets and handled hardware/software troubleshooting.
Documented IT procedures and tracked system changes across departments.

Education
———————————————————————————————————————————
Full Stack Development Bootcamp | University of California, Berkeley | Aug 2024 – Jan 2025
Comprehensive training in modern web development technologies, focusing on React.js, Node.js, Express.js, MongoDB, API
integration, and DevOps strategies. Hands-on experience in cloud computing, containerization with Docker and Kubernetes,
and CI/CD pipeline implementation.
(SDET) QA Engineer Bootcamp | Mersys.io | Oct 2022 – Jul 2023
Intensive training in test automation, API testing, and CI/CD pipeline integration. Expertise in Selenium WebDriver, TestNG,
Cucumber BDD, REST Assured, and Postman. Practical experience in integrating automated testing workflows into
deployment pipelines using Jenkins and GitHub Actions.
Associates's Degree in Computer Science | Renton Technical College | Sep 2020 – Jun 2022
Strong foundation in computer science principles, including data structures, algorithms, and software engineering. Extensive
coursework in database management, application architecture, and system design, focusing on relational and NoSQL
databases. Hands-on experience in Java, Python, and C++ for software development and automation testing.
Certifications
———————————————————————————————————————————
Certified Full Stack Web Developer – University of California, Berkeley (Jan 2025)
Certified Software Developer and Engineer in Testing (SDET) – Mersys.io (Jul 2023)
Certified in Agile Development & Team Collaboration – Mersys.io (Oct 2022)
Certified Java Programming & Automation Testing – Mersys.io (Apr 2022)
Languages
———————————————————————————————————————————
English - Native (★★★★★ 5/5)
Turkish - Professional Proficiency (★★★☆☆ 3/5)
Spanish - Professional Proficiency (★★★☆☆ 3/5)`

const downloadResume = () => {
  const blob = new Blob([resumeContent], { type: "text/plain" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = "Brock_Altug_Resume.txt"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedCertification, setSelectedCertification] = useState<(typeof certifications)[0] | null>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [skillsModalOpen, setSkillsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  const featuredProjectsRef = useRef<HTMLHeadingElement>(null)

  const categories = ["All", "Web Development", "Fullstack", "Frontend", "Backend", "PWA", "Tools"]
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  // Pagination logic - 12 projects per page
  const projectsPerPage = 12
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  const startIndex = currentPage * projectsPerPage
  const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage)

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(0)
  }, [activeFilter])

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedCertification(null)
      setSelectedProject(null)
    }
  }

  const scrollToFeaturedProjects = () => {
    setTimeout(() => {
      featuredProjectsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 app-container">
      {/* Subtle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-slate-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex items-center justify-center px-4 py-6">
          <div className="max-w-6xl mx-auto w-full">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="space-y-4">
                    <div>
                      <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                        Brock Altug
                      </h1>
                      <p className="text-lg md:text-xl text-blue-200 mt-1">Full Stack Developer / Automation Tester</p>
                    </div>

                    <div className="space-y-2 text-white/80 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-blue-300" />
                        <span>Seattle, Washington, USA</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3 text-blue-300" />
                        <span>(206) 739-7583</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3 text-blue-300" />
                        <a href="mailto:altugba99@gmail.com" className="hover:text-blue-300 transition-colors">
                          altugba99@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs"
                        asChild
                      >
                        <a href="https://linkedin.com/in/brock-altug" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-3 h-3 mr-1" />
                          LinkedIn
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs"
                        asChild
                      >
                        <a href="https://github.com/BrockAltug" target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-1" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-lg opacity-50"></div>
                      <Image
                        src="/assets/profile.png"
                        alt="Brock Altug"
                        width={200}
                        height={200}
                        className="relative rounded-full border-2 border-white/20 shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section className="py-6 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">About Me</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
                <CardContent className="p-6">
                  <p className="text-white/90 leading-relaxed text-sm">
                    With a solid foundation in <strong className="text-blue-300">Full Stack Development</strong> and{" "}
                    <strong className="text-blue-300">Automation Testing</strong>, I am committed to delivering
                    innovative, scalable, and efficient software solutions tailored to diverse needs. My expertise spans
                    both front-end and back-end technologies, including building user-focused applications with
                    frameworks like React.js, Angular, and Node.js, as well as designing and implementing secure,
                    high-performance server-side architectures. Proficient in creating and consuming RESTful APIs and
                    GraphQL APIs, I excel in implementing robust authentication and authorization mechanisms, including
                    OAuth, JWT, and secure session management. Additionally, I bring hands-on experience in automation
                    testing, containerization, CI/CD pipelines, and modern DevOps practices to ensure the delivery of
                    reliable, high-quality software solutions that drive operational excellence.
                  </p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 text-center">Core Competencies</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {coreCompetencies.map((competency) => (
                      <Badge
                        key={competency.name}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-[10px] py-1 px-2 justify-center cursor-pointer hover:bg-blue-500/30 transition-colors"
                        onClick={() => window.open(competency.url, "_blank")}
                      >
                        {competency.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section - Optimized for Performance */}
        <section className="py-6 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">Technical Skills</h2>
            <p className="text-white/80 text-center mb-4 text-sm max-w-4xl mx-auto">
              With a comprehensive set of skills in web development, automation testing, and software engineering, I am
              proficient in a range of technologies and frameworks. These competencies allow me to build scalable,
              high-performance applications and implement effective automation strategies.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Tech Stacks Card */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4 text-center">Technology Stacks</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      { name: "MERN", link: "https://www.mongodb.com/mern-stack" },
                      { name: "MERNG", link: "https://graphql.org/learn/" },
                      { name: "MEVN", link: "https://vuejs.org/" },
                      { name: "MEAN", link: "https://angular.io/start" },
                      { name: "MEEN", link: "https://nodejs.org/" },
                      { name: "SERN", link: "https://reactjs.org/" },
                      { name: "PWA", link: "https://web.dev/progressive-web-apps/" },
                    ].map((stack) => (
                      <Badge
                        key={stack.name}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 text-sm py-2 px-4 cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => window.open(stack.link, "_blank")}
                      >
                        {stack.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Core Skills Card */}
              <Card
                className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl cursor-pointer hover:bg-white/10 transition-all duration-300"
                onClick={() => setSkillsModalOpen(true)}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-4 text-center">Core Technical Skills</h3>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      "React",
                      "Node.js",
                      "TypeScript",
                      "Python",
                      "MongoDB",
                      "PostgreSQL",
                      "Selenium",
                      "Docker",
                      "AWS",
                      "GraphQL",
                      "Jest",
                      "Figma",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-xs px-2 py-1 text-center justify-center"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-center">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 text-sm px-4 py-2">
                      + {skillsWithLinks.length - 12} more skills
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-6 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">Experience</h2>

            <div className="space-y-3">
              {experiences.map((exp, index) => (
                <div key={index}>
                  <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-3">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                          <p className="text-blue-300 font-medium text-sm mb-2">{exp.company}</p>
                          <div className="flex gap-1 mb-2">
                            {exp.type.split(" • ").map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="border-blue-400/30 text-blue-200 text-[10px] px-1 py-0"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-blue-500/20 text-blue-200 border-blue-400/30 whitespace-nowrap text-xs"
                        >
                          {exp.period}
                        </Badge>
                      </div>

                      <p className="text-white/80 mb-3 leading-relaxed text-sm">{exp.description}</p>

                      <div className="flex flex-wrap gap-1">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border-blue-400/30 text-[10px] px-1 py-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-6 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">Education</h2>

            <div className="space-y-3">
              {/* Full Stack Web Development Bootcamp */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
                <CardContent className="p-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Full Stack Web Development Bootcamp</h3>
                      <p className="text-blue-300 font-medium text-sm mb-2">University of California, Berkeley</p>
                      <Badge variant="outline" className="border-blue-400/30 text-blue-200 text-[10px] px-1 py-0">
                        Completed Jan 2025
                      </Badge>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-xs">
                      Aug 2024 - Jan 2025
                    </Badge>
                  </div>
                  <p className="text-white/80 mb-3 leading-relaxed text-sm">
                    This immersive bootcamp focused on equipping me with the latest full-stack development skills.
                    Covered cutting-edge technologies like React.js, Node.js, Express.js, and MongoDB, along with
                    advanced DevOps practices like containerization (Docker, Kubernetes) and CI/CD pipelines (Jenkins,
                    GitHub Actions). Emphasized real-world application development, API integrations, and security best
                    practices.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "React.js",
                      "Node.js",
                      "MongoDB",
                      "Express.js",
                      "GraphQL",
                      "Docker",
                      "Kubernetes",
                      "CI/CD Pipelines",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border-blue-400/30 text-[10px] px-1 py-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* SDET Bootcamp */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
                <CardContent className="p-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">(SDET) QA Engineer Bootcamp</h3>
                      <p className="text-blue-300 font-medium text-sm mb-2">Mersys.io</p>
                      <Badge variant="outline" className="border-blue-400/30 text-blue-200 text-[10px] px-1 py-0">
                        Completed Jul 2023
                      </Badge>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-xs">
                      Oct 2022 - Jul 2023
                    </Badge>
                  </div>
                  <p className="text-white/80 mb-3 leading-relaxed text-sm">
                    Intensive training focused on mastering automation testing frameworks using Selenium, TestNG, and
                    Cucumber BDD. Specialized in API testing with REST Assured and Postman. Gained experience in CI/CD
                    workflows, integrating automated test scripts into Jenkins and GitHub Actions pipelines. Developed
                    and executed comprehensive test suites to ensure high-quality software releases.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "Selenium WebDriver",
                      "TestNG",
                      "Cucumber BDD",
                      "REST Assured",
                      "Postman",
                      "Jenkins",
                      "GitHub Actions",
                    ].map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border-blue-400/30 text-[10px] px-1 py-0"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Associates Degree */}
              <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
                <CardContent className="p-3">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Associates's Degree in CS</h3>
                      <p className="text-blue-300 font-medium text-sm mb-2">Renton Technical College</p>
                      <Badge variant="outline" className="border-blue-400/30 text-blue-200 text-[10px] px-1 py-0">
                        Completed Jun 2022
                      </Badge>
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-xs">
                      Sep 2020 - Jun 2022
                    </Badge>
                  </div>
                  <p className="text-white/80 mb-3 leading-relaxed text-sm">
                    Developed a strong foundation in computer science principles, including data structures, algorithms,
                    and software engineering. Gained hands-on experience in programming languages like Java, Python, and
                    C++. Specialized in database management, application architecture, and system design, with a focus
                    on relational and NoSQL databases.
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {["Java", "Python", "C++", "Data Structures", "Algorithms", "Database Design", "SQL"].map(
                      (tech) => (
                        <Badge
                          key={tech}
                          className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border-blue-400/30 text-[10px] px-1 py-0"
                        >
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Certifications */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white mb-4 text-center">Certifications</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {certifications.map((cert) => (
                    <Card
                      key={cert.id}
                      className={`backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl transition-all duration-300 group ${
                        cert.image ? "cursor-pointer hover:bg-white/10" : ""
                      }`}
                      onClick={() => cert.image && setSelectedCertification(cert)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-grow">
                            <h4 className="font-bold text-white text-sm group-hover:text-blue-200 transition-colors mb-1">
                              {cert.name}
                            </h4>
                            <p className="text-blue-300 text-xs mb-2">{cert.org}</p>
                            <p className="text-white/70 text-xs leading-relaxed line-clamp-2">{cert.description}</p>
                          </div>
                          <div className="flex items-center ml-3">
                            <Award className="w-5 h-5 text-blue-300 group-hover:text-blue-200 transition-colors" />
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {cert.skills.slice(0, 4).map((skill) => (
                            <Badge
                              key={skill}
                              className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border-blue-400/30 text-[9px] px-1 py-0"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {cert.skills.length > 4 && (
                            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 text-[9px] px-1 py-0">
                              +{cert.skills.length - 4} more
                            </Badge>
                          )}
                        </div>

                        {cert.image && (
                          <div className="text-right">
                            <Badge
                              variant="outline"
                              className="border-blue-400/30 text-blue-200 text-[10px] px-2 py-1 group-hover:border-blue-300 transition-colors"
                            >
                              View Certificate
                            </Badge>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-6 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 ref={featuredProjectsRef} className="text-2xl md:text-3xl font-bold text-center text-white mb-4">Featured Projects</h2>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    setActiveFilter(category)
                    setCurrentPage(0) // Reset to first page when filter changes
                    scrollToFeaturedProjects()
                  }}
                  className={`${
                    activeFilter === category
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0"
                      : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  } transition-all duration-300 text-xs px-3 py-1`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects Grid with Navigation */}
            <div className="relative">
              {/* Projects Grid */}
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-3">
                {currentProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group cursor-pointer transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 h-full"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300 overflow-hidden h-full flex flex-col">
                      <div className="aspect-square relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <CardContent className="p-2 flex-grow flex flex-col justify-between">
                        <h3 className="text-white font-medium text-[10px] mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors leading-tight flex-grow">
                          {project.title}
                        </h3>
                        <div className="mt-auto">
                          <Badge
                            variant="outline"
                            className="border-blue-400/30 text-blue-200 text-[8px] px-1 py-0 w-full justify-center"
                          >
                            {project.category}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Navigation Controls Below Projects */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-6">
                  <Button
                    onClick={() => {
                      prevPage()
                      scrollToFeaturedProjects()
                    }}
                    disabled={currentPage === 0}
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed px-4 py-2 rounded-lg"
                    size="sm"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </Button>

                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setCurrentPage(i)
                            scrollToFeaturedProjects()
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i === currentPage ? "bg-blue-400" : "bg-white/30 hover:bg-white/50"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white/60 text-xs ml-2">
                      {currentPage + 1} / {totalPages}
                    </span>
                  </div>

                  <Button
                    onClick={() => {
                      nextPage()
                      scrollToFeaturedProjects()
                    }}
                    disabled={currentPage === totalPages - 1}
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed px-4 py-2 rounded-lg"
                    size="sm"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl">
              <CardContent className="p-4">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-4">Let's Connect</h3>
                  <div className="flex justify-center gap-3 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs"
                      asChild
                    >
                      <a href="https://linkedin.com/in/brock-altug" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-3 h-3 mr-1" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs"
                      asChild
                    >
                      <a href="https://github.com/BrockAltug" target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        GitHub
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-xs"
                      asChild
                    >
                      <a href="mailto:altugba99@gmail.com">
                        <Mail className="w-3 h-3 mr-1" />
                        Email
                      </a>
                    </Button>
                  </div>

                  <div className="flex justify-center mb-6">
                    <Button
                      onClick={downloadResume}
                      size="sm"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 hover:from-blue-700 hover:to-indigo-700 text-xs w-full max-w-[200px]"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Download Resume
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-center">
                      <Image
                        src="https://github-readme-stats.vercel.app/api?username=brockaltug&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000"
                        alt="GitHub Stats"
                        width={300}
                        height={150}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=brockaltug&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000"
                        alt="Top Languages"
                        width={300}
                        height={120}
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center mt-6 pt-4 border-t border-white/20">
                  <p className="text-white/60 text-sm">
                    © {new Date().getFullYear()} Brock Altug. All Rights Reserved.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </footer>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-blue-400/30 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto transform animate-in fade-in-0 zoom-in-95 duration-300">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-white/20 mr-4">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h2>
                        <div className="flex items-center gap-3 mt-2">
                          <Badge className="bg-white/20 text-white border-0 text-sm">{selectedProject.category}</Badge>
                          <div className="flex items-center text-blue-100 text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {selectedProject.timeline}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        onClick={() => window.open(selectedProject.url, "_blank")}
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20 p-2"
                      >
                        <Globe className="w-5 h-5" />
                      </Button>
                      <Button
                        onClick={() => setSelectedProject(null)}
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20 p-2"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Project Image */}
                  <div className="mb-6">
                    <div className="relative w-full max-w-4xl mx-auto">
                      <Image
                        src={selectedProject.image || "/placeholder.svg"}
                        alt={selectedProject.title}
                        width={800}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-lg border border-white/20"
                      />
                    </div>
                  </div>

                  {/* Project Overview */}
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="md:col-span-2">
                      <h3 className="text-xl font-bold text-white mb-3">Project Overview</h3>
                      <p className="text-white/90 leading-relaxed mb-4">{selectedProject.description}</p>
                      <p className="text-white/80 leading-relaxed text-sm">{selectedProject.longDescription}</p>
                    </div>

                    <div className="space-y-4">
                      {/* Project Details */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Project Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-white/70">Role:</span>
                            <span className="text-white">{selectedProject.role}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/70">Timeline:</span>
                            <span className="text-white">{selectedProject.timeline}</span>
                          </div>
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h4 className="text-white font-semibold mb-3 flex items-center">
                          <Target className="w-4 h-4 mr-2" />
                          Key Metrics
                        </h4>
                        <div className="space-y-2 text-sm">
                          {Object.entries(selectedProject.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-white/70 capitalize">{key}:</span>
                              <span className="text-green-400">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border-blue-400/30 text-sm px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-white/80">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-red-500/10 rounded-lg p-4 border border-red-400/20">
                      <h4 className="text-white font-semibold mb-3">Challenges</h4>
                      <p className="text-white/80 text-sm leading-relaxed">{selectedProject.challenges}</p>
                    </div>
                    <div className="bg-green-500/10 rounded-lg p-4 border border-green-400/20">
                      <h4 className="text-white font-semibold mb-3">Solutions</h4>
                      <p className="text-white/80 text-sm leading-relaxed">{selectedProject.solutions}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={() => window.open(selectedProject.url, "_blank")}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 px-8 py-3 text-lg font-medium shadow-lg hover:scale-105 transition-all"
                    >
                      <Globe className="w-5 h-5 mr-2" />
                      View Live Project
                    </Button>
                    <Button
                      onClick={() => setSelectedProject(null)}
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-8 py-3 text-lg font-medium hover:scale-105 transition-all"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Certification Modal */}
        {selectedCertification && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-blue-400/30 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform animate-in fade-in-0 zoom-in-95 duration-300">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-white/20 mr-4">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{selectedCertification.name}</h2>
                        <p className="text-blue-100 text-sm">{selectedCertification.org}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => setSelectedCertification(null)}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 p-2"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Certificate Image */}
                  {selectedCertification.image && (
                    <div className="mb-6">
                      <div className="relative w-full max-w-3xl mx-auto">
                        <Image
                          src={selectedCertification.image || "/placeholder.svg"}
                          alt={selectedCertification.name}
                          width={800}
                          height={600}
                          className="w-full h-auto rounded-lg shadow-lg border border-white/20"
                        />
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <div className="space-y-4 text-white/90 leading-relaxed mb-6">
                    <p className="text-base">{selectedCertification.description}</p>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-white mb-3">Skills & Technologies Covered</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCertification.skills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-200 border-blue-400/30 text-sm px-3 py-1"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button
                      onClick={() => setSelectedCertification(null)}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 px-8 py-3 text-lg font-medium shadow-lg hover:scale-105 transition-all"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Skills Modal */}
        {skillsModalOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSkillsModalOpen(false)
              }
            }}
          >
            <Card className="backdrop-blur-xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-blue-400/30 shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto transform animate-in fade-in-0 zoom-in-95 duration-300">
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-6 rounded-t-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-white/20 mr-4">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">All Technical Skills</h2>
                        <p className="text-blue-100 text-sm">Complete technology stack and expertise</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => setSkillsModalOpen(false)}
                      variant="ghost"
                      size="sm"
                      className="text-white hover:bg-white/20 p-2"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2">
                    {skillsWithLinks.map((skill) => (
                      <div key={skill.name} className="group">
                        <div
                          className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 transition-colors duration-200 cursor-pointer h-full rounded-lg"
                          onClick={() => window.open(skill.url, "_blank")}
                        >
                          <div className="p-2 flex flex-col items-center justify-center text-center min-h-[50px]">
                            <div className="text-blue-300 mb-1 group-hover:text-blue-200 transition-colors duration-200">
                              {skill.icon}
                            </div>
                            <span className="text-white/90 text-[9px] font-medium group-hover:text-white transition-colors duration-200 leading-tight">
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center mt-6">
                    <Button
                      onClick={() => setSkillsModalOpen(false)}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white border-0 px-8 py-3 text-lg font-medium shadow-lg hover:scale-105 transition-all"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
