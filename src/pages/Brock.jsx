import profileImage from './assets/profile.png';
import projectImageSoftEdge from './assets/project-softedge.png';
import projectImage01 from './assets/project-01.png';
import projectImage02 from './assets/project-02.png';
import projectImage03 from './assets/project-03.png';
import projectImage04 from './assets/project-04.png';
import projectImage05 from './assets/project-05.png';
import projectImage06 from './assets/project-06.png';
import projectImage07 from './assets/project-07.png';
import projectImage08 from './assets/project-08.png';
import projectImage09 from './assets/project-09.png';
import projectImage10 from './assets/project-10.png';
import projectImage11 from './assets/project-11.png';
import projectImage12 from './assets/project-12.png';
import projectImage13 from './assets/project-13.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./Brock.css";

const Brock = () => {
  // Function to handle JPG export
  const exportToJPG = () => {
    const element = document.querySelector(".app-container");
    if (element) {
      html2canvas(element).then((canvas) => {
        const imgURL = canvas.toDataURL("image/jpeg", 0.7); // Adjust quality if needed
        const link = document.createElement("a");
        link.href = imgURL;
        link.download = "brockaltug-portfolio.jpg";
        link.click();
      });
    } else {
      console.error("Container element not found for JPG export");
    }
  };

  // Function to handle high-resolution PDF export
  const exportToPDFHighRes = () => {
    const element = document.querySelector(".app-container");
    if (element) {
      html2canvas(element, {
        scale: 2, // High resolution
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg", 1.0); // Max quality
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 width
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let position = 0;

        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        let remainingHeight = imgHeight - 297;

        while (remainingHeight > 0) {
          position -= 297;
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
          remainingHeight -= 297;
        }

        pdf.save("brockaltug-portfolio.pdf");
      });
    } else {
      console.error("Container element not found for PDF export");
    }
  };

  // Function to handle low-resolution PDF export
  const exportToPDFLowRes = () => {
    const element = document.querySelector(".app-container");
    if (element) {
      html2canvas(element, {
        scale: 1, // Lower resolution
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/jpeg", 0.5); // Reduced quality for smaller size
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 width
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let position = 0;

        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST'); // Fast compression
        let remainingHeight = imgHeight - 297;

        while (remainingHeight > 0) {
          position -= 297;
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
          remainingHeight -= 297;
        }

        pdf.save("brockaltug-portfolio-low-res.pdf");
      });
    } else {
      console.error("Container element not found for PDF export");
    }
  };

  return (
    <div className="app-container">
      {/* Floating Export Buttons */}
      <div className="export-buttons">
        <button className="export-btn" onClick={exportToJPG}>JPG</button>
        <button className="export-btn" onClick={exportToPDFHighRes}>PDF (High-Res)</button>
        <button className="export-btn" onClick={exportToPDFLowRes}>PDF (Low-Res)</button>
      </div>
      

      {/* Header Section */}
      <header className="header-container">
        <div className="header-content">
          <div className="header-text">
            <p className="header-title">Brock Altug</p>
            <p className="header-subtitle">Full Stack Developer / Automation Tester</p>
            <p className="header-location">
              <FontAwesomeIcon icon={faGlobe} /> Seattle, Washington, USA
            </p>
            <p className="header-email">
              <FontAwesomeIcon icon={faEnvelope} /> altugba99@gmail.com
            </p>
            <div className="header-links">
              <a
                href="mailto:altugba99@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="header-link"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="https://github.com/BrockAltug"
                target="_blank"
                rel="noopener noreferrer"
                className="header-link"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com/in/BrockAltug"
                target="_blank"
                rel="noopener noreferrer"
                className="header-link"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className="header-image">
            <img
              src={profileImage}
              alt="Brock Altug"
              className="profile-image"
            />
          </div>
        </div>
      </header>

      <section className="about-section">
  <h2 className="section-titlee">About Me</h2>
  <p className="about-paragraph">
    With a <strong>Bachelor’s degree in Computer Science</strong> and a solid foundation in <strong>Full Stack Development</strong> and <strong>Automation Testing</strong>, I am committed to delivering innovative, scalable, and efficient software solutions tailored to diverse needs. My expertise spans both front-end and back-end technologies, including building user-focused applications with frameworks like React.js, Angular, and Node.js, as well as designing and implementing secure, high-performance server-side architectures. Proficient in creating and consuming RESTful APIs and GraphQL APIs, I excel in implementing robust authentication and authorization mechanisms, including OAuth, JWT, and secure session management. Additionally, I bring hands-on experience in automation testing, containerization, CI/CD pipelines, and modern DevOps practices to ensure the delivery of reliable, high-quality software solutions that drive operational excellence.
  </p>

  {/* Competencies Section */}
<div className="education-item">
  <div className="education-header">
    <h3 className="education-titlee">Competencies</h3>
  </div>

  <div className="certifications-list">
    <div className="certification-button">Software Architecture</div>
    <div className="certification-button">Full Stack Development</div>
    <div className="certification-button">Automation Testing</div>
    <div className="certification-button">API Design</div>
    <div className="certification-button">CI/CD Pipelines</div>
    <div className="certification-button">DevOps Practices</div>
    <div className="certification-button">Agile Methodologies</div>
    <div className="certification-button">Cloud-Native Applications</div>
    <div className="certification-button">Scalable Microservices</div>
    <div className="certification-button">Security and Authentication</div>
    <div className="certification-button">Performance Optimization</div>
    <div className="certification-button">Team Leadership</div>
  </div>
</div>

  <div className="stacks-container">
    <h3 className="section-subtitle">Stacks</h3>
    <div className="stack-buttons">
      {[
        { name: "MERN", link: "https://www.mongodb.com/mern-stack" },
        { name: "MERNG", link: "https://graphql.org/learn/" },
        { name: "MEVN", link: "https://vuejs.org/" },
        { name: "MEAN", link: "https://angular.io/start" },
        { name: "MEEN", link: "https://nodejs.org/" },
        { name: "SERN", link: "https://reactjs.org/" },
        { name: "PWA", link: "https://web.dev/progressive-web-apps/" },
      ].map((stack) => (
        <button
          className="stack-button"
          key={stack.name}
          onClick={() => window.open(stack.link, "_blank")}
        >
          {stack.name}
        </button>
      ))}
    </div>
  </div>
</section>








{/* Skills Section */}
<h2 className="section-titlee">Skills</h2>
<section className="skills-section">
  
  <p className="about-paragraph">
    With a comprehensive set of skills in web development, automation testing, and software engineering, I am proficient in a range of technologies and frameworks. These competencies allow me to build scalable, high-performance applications and implement effective automation strategies. Below is a list of my core technical skills.
  </p>

  <div className="stack-buttons">
    {[
      // Front-End Development
      "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", 
      "React", "Redux", "Next.js", "Tailwind CSS", "Bootstrap", "SASS", "jQuery", "Vue.js", "Angular", 
      
      // Back-End Development
      "Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs", "WebSockets", "Microservices", 
      
      // Databases & Data Management
      "MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite", "Mongoose", "Sequelize", "TypeORM", 
      
      // Testing & Automation
      "Selenium WebDriver", "TestNG", "Cucumber BDD", "REST Assured", "Postman", "Jest", "Mocha", "Chai", "Cypress", 
      
      // DevOps & Containerization
      "Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins", "GitHub Actions", "AWS", "GCP", "Azure", "Terraform", "Ansible", 
      
      // Version Control & Collaboration
      "Git", "GitHub", "Bitbucket", "GitLab", "SVN", "Mercurial", 
      
      // Cloud & Serverless
      "AWS Lambda", "AWS EC2", "AWS S3", "AWS RDS", "GCP App Engine", "GCP Functions", "Azure Functions", "Serverless Framework", 

      // Security & Authentication
      "OAuth", "JWT", "SAML", "2FA", "HTTPS", "SSL/TLS", "CORS", 
      
      // Performance Optimization
      "Caching", "Load Balancing", "Compression", "Minification", "Lazy Loading", "Code Splitting", "Database Indexing", 

      // Agile & Methodologies
      "Agile", "Scrum", "Kanban", "Jira", "Confluence", "Trello", "Asana", "CI/CD", "TDD", "BDD", 

      // Architecture & Design Patterns
      "MVC", "MVVM", "Microservices Architecture", "RESTful Services", "Event-Driven Architecture", "CQRS", "Domain-Driven Design", 

      // Other Tools & Technologies
      "Nginx", "Apache", "Vercel", "Netlify", "Heroku", "WordPress", "Shopify", "Contentful", "WebRTC", "Socket.IO", 
    ].map((skill) => (
      <button
        key={skill}
        className="stack-button"
        onClick={() => alert(`Skill: ${skill}`)} // Example action when clicked
      >
        {skill}
      </button>
    ))}
  </div>
</section>







      {/* Experience Section */}
<section className="experience-section">
  <h2 className="section-titlee">Experience</h2>

  {/* Full Stack Web Developer */}
  <div className="experience-item">
    <div className="experience-header">
      <div className="experience-left">
        <h3 className="experience-title">Full Stack Web Developer</h3>
        <p className="experience-company">SoftEdge Development</p>
        <div className="job-tags">
          <div className="tag-button">REMOTE</div>
          <div className="tag-button">FULLTIME</div>
        </div>
      </div>
      <p className="experience-date">Jan 2024 - Present</p>
    </div>
    <p className="experience-description">
      Spearheaded the development of dynamic, responsive, and mobile-first web applications using React.js, Node.js, and MongoDB. 
      Designed and implemented RESTful APIs and GraphQL endpoints to enable efficient and secure communication between front-end and back-end systems. 
      Enhanced user experiences with modern frameworks like Tailwind CSS and Bootstrap, ensuring accessibility and responsiveness across devices. 
      Developed scalable microservices and implemented server-side rendering with Next.js, improving performance and SEO. 
      Engineered database solutions with PostgreSQL and MongoDB, optimizing query performance and employing Redis for caching in high-traffic applications. 
      Integrated CI/CD pipelines using GitHub Actions and Jenkins for seamless build and deployment workflows. 
      Deployed cloud-native applications using Docker, Kubernetes, AWS, and GCP for resilient and scalable infrastructure. 
      Collaborated with clients to gather requirements, provided regular updates, and delivered intuitive, feature-rich solutions ahead of schedule.
    </p>
    <div className="technologies-buttons">
      <div className="technology-button">React.js</div>
      <div className="technology-button">Node.js</div>
      <div className="technology-button">MongoDB</div>
      <div className="technology-button">RESTful APIs</div>
      <div className="technology-button">GraphQL</div>
      <div className="technology-button">Tailwind CSS</div>
      <div className="technology-button">Bootstrap</div>
      <div className="technology-button">Docker</div>
      <div className="technology-button">Kubernetes</div>
      <div className="technology-button">AWS</div>
      <div className="technology-button">GCP</div>
    </div>
  </div>

  {/* QA Engineer */}
  <div className="experience-item">
    <div className="experience-header">
      <div className="experience-left">
        <h3 className="experience-title">QA Engineer</h3>
        <p className="experience-company">Nako Holding Company LLC</p>
        <div className="job-tags">
          <div className="tag-button">REMOTE</div>
          <div className="tag-button">FULLTIME</div>
        </div>
      </div>
      <p className="experience-date">Jun 2022 - Dec 2023</p>
    </div>
    <p className="experience-description">
      Designed advanced automation frameworks using Java, Selenium WebDriver, TestNG, and Cucumber BDD to streamline testing processes. 
      Developed reusable test scripts, reducing manual testing by 60% and identifying critical defects early. 
      Conducted API testing with REST Assured and Postman, ensuring seamless service integrations. 
      Integrated automation scripts into CI/CD pipelines using Jenkins and GitHub Actions, significantly improving deployment efficiency. 
      Leveraged Docker for containerized testing environments and Cypress for modern web application testing. 
      Provided training sessions on automation testing best practices and authored detailed technical documentation. 
      Led defect tracking and reporting initiatives, enabling rapid issue resolution and improving overall software quality.
    </p>
    <div className="technologies-buttons">
      <div className="technology-button">Java</div>
      <div className="technology-button">Selenium WebDriver</div>
      <div className="technology-button">TestNG</div>
      <div className="technology-button">Cucumber BDD</div>
      <div className="technology-button">REST Assured</div>
      <div className="technology-button">Postman</div>
      <div className="technology-button">Docker</div>
      <div className="technology-button">Cypress</div>
      <div className="technology-button">Jenkins</div>
      <div className="technology-button">GitHub Actions</div>
    </div>
  </div>

  {/* QA Intern */}
  <div className="experience-item">
    <div className="experience-header">
      <div className="experience-left">
        <h3 className="experience-title">QA Intern</h3>
        <p className="experience-company">Mersys</p>
        <div className="job-tags">
          <div className="tag-button">REMOTE</div>
          <div className="tag-button">INTERNSHIP</div>
        </div>
      </div>
      <p className="experience-date">Jan 2022 - Jun 2022</p>
    </div>
    <p className="experience-description">
      Developed automated test suites using Java, Selenium, and Maven, enhancing the quality of software releases. Executed cross-browser testing using Selenium Grid, ensuring consistent performance across platforms. Implemented BDD with Cucumber, creating clear test scenarios aligned with business requirements. Validated APIs using Postman and contributed to Agile sprint cycles, ensuring timely delivery of high-quality software. Documented testing processes, created detailed reports, and provided actionable insights for improvement.
    </p>
    <div className="technologies-buttons">
      <div className="technology-button">Java</div>
      <div className="technology-button">Selenium</div>
      <div className="technology-button">Maven</div>
      <div className="technology-button">Cucumber</div>
      <div className="technology-button">Selenium Grid</div>
      <div className="technology-button">Postman</div>
    </div>
  </div>

  {/* Data Entry Specialist */}
  <div className="experience-item">
    <div className="experience-header">
      <div className="experience-left">
        <h3 className="experience-title">Data Entry Specialist</h3>
        <p className="experience-company">Nako Holding Company LLC</p>
        <div className="job-tags">
          <div className="tag-button">ON-SITE</div>
          <div className="tag-button">FULLTIME</div>
        </div>
      </div>
      <p className="experience-date">Oct 2018 - Dec 2021</p>
    </div>
    <p className="experience-description">
      Managed large volumes of data with 99.9% accuracy, maintaining high standards of integrity. Streamlined workflows using automation tools, reducing manual entry time by 25%. Conducted audits to identify and resolve inconsistencies, reducing data-related errors by 20%. Trained new team members on data entry protocols and optimized reporting processes with advanced spreadsheet functionalities. Played a key role in migrating legacy data systems, improving accessibility and reducing redundancies.
    </p>
    <div className="technologies-buttons">
      <div className="technology-button">Data Entry</div>
      <div className="technology-button">Data Analysis</div>
      <div className="technology-button">Automation Tools</div>
      <div className="technology-button">Spreadsheet Functions</div>
      <div className="technology-button">Data Integrity</div>
      <div className="technology-button">Legacy Systems</div>
    </div>
  </div>
</section>












      













      {/* Education Section */}
<section className="education-section">
  <h2 className="section-titlee">Education</h2>

  {/* Full Stack Web Development Bootcamp */}
  <div className="education-item">
    <div className="education-header">
      <div className="education-left">
        <h3 className="education-title">Full Stack Development Bootcamp</h3>
        <p className="education-company">University of California, Berkeley</p>
        <div className="job-tags">
          <div className="tag-button">Completed Jan 2025</div>
        </div>
      </div>
      <p className="education-date">Aug 2024 - Jan 2025</p>
    </div>
    <p className="education-description">
      This immersive bootcamp focused on equipping me with the latest full-stack development skills. Covered cutting-edge technologies like React.js, Node.js, Express.js, and MongoDB, along with advanced DevOps practices like containerization (Docker, Kubernetes) and CI/CD pipelines (Jenkins, GitHub Actions). Emphasized real-world application development, API integrations, and security best practices.
    </p>
    <div className="technologies-buttons">
      <div className="technology-button">React.js</div>
      <div className="technology-button">Node.js</div>
      <div className="technology-button">MongoDB</div>
      <div className="technology-button">Express.js</div>
      <div className="technology-button">GraphQL</div>
      <div className="technology-button">Docker</div>
      <div className="technology-button">Kubernetes</div>
      <div className="technology-button">CI/CD Pipelines</div>
    </div>
  </div>

  {/* Software Development Engineer in Testing Bootcamp */}
  <div className="education-item">
    <div className="education-header">
      <div className="education-left">
        <h3 className="education-title">QA Engineer Bootcamp</h3>
        <p className="education-company">Mersys.io</p>
        <div className="job-tags">
          <div className="tag-button">Completed Jul 2023</div>
        </div>
      </div>
      <p className="education-date">Oct 2022 - Jul 2023</p>
    </div>
    <p className="education-description">
      Intensive training focused on mastering automation testing frameworks using Selenium, TestNG, and Cucumber BDD. Specialized in API testing with REST Assured and Postman. Gained experience in CI/CD workflows, integrating automated test scripts into Jenkins and GitHub Actions pipelines. Developed and executed comprehensive test suites to ensure high-quality software releases.
    </p>
    <div className="technologies-buttons">
      <div className="technology-button">Selenium WebDriver</div>
      <div className="technology-button">TestNG</div>
      <div className="technology-button">Cucumber BDD</div>
      <div className="technology-button">REST Assured</div>
      <div className="technology-button">Postman</div>
      <div className="technology-button">Jenkins</div>
      <div className="technology-button">GitHub Actions</div>
    </div>
  </div>

  {/* Bachelor's Degree in Computer Science */}
  <div className="education-item">
    <div className="education-header">
      <div className="education-left">
        <h3 className="education-title">Bachelor’s Degree in CS</h3>
        <p className="education-company">Renton Technical College</p>
        <div className="job-tags">
          <div className="tag-button">Completed Jun 2022</div>
        </div>
      </div>
      <p className="education-date">Sep 2018 - Jun 2022</p>
    </div>
    <p className="education-description">
      Developed a strong foundation in computer science principles, including data structures, algorithms, and software engineering. Gained hands-on experience in programming languages like Java, Python, and C++. Specialized in database management, application architecture, and system design, with a focus on relational and NoSQL databases.
    </p>
    <div className="technologies-buttons">
      <div className="technology-button">Java</div>
      <div className="technology-button">Python</div>
      <div className="technology-button">C++</div>
      <div className="technology-button">Data Structures</div>
      <div className="technology-button">Algorithms</div>
      <div className="technology-button">Database Design</div>
      <div className="technology-button">SQL</div>
    </div>
  </div>

  {/* Certifications Section */}
<div className="education-item">
  <div className="education-header">
    <h3 className="education-title">Certifications</h3>
  </div>
  
  <div className="certifications-list">
  <div className="certification-button">
    Certified Full Stack Web Developer <span>University of California, Berkeley - Aug 2023 - Nov 2023</span>
  </div>
  <div className="certification-button">
    Certified Software Developer and Engineer in Testing (SDET) <span>Mersys.io - Oct 2022 - Jul 2023</span>
  </div>
  <div className="certification-button">
    Certified in Agile Development and Team Collaboration <span>Various Online Platforms - Oct 2022</span>
  </div>
  <div className="certification-button">
    Certified in Java Programming and Automation Testing <span>Self-Learning & Online Courses - Apr 2022</span>
  </div>
</div>
</div>
</section>













<section className="projects-section">
  <h2 className="section-titlee">Projects</h2>

  <div className="projects-grid">



{/* Project: SoftEdge Development Website */}
<div
  className="project-card"
  onClick={() => window.open('https://softedgedevelopment.com', '_blank')} // Replace with your live domain
>
  <img
    src={projectImageSoftEdge} // Import your project image here
    alt="SoftEdge Development - Custom Deployed Portfolio"
    className="project-image"
  />
  <div className="project-details">
    <h3>SoftEdge Development</h3>
    <p className="project-description">
      A fully customized and deployed portfolio website, built from scratch with a custom domain, DNS configuration, and seamless Netlify deployment. Showcasing expertise in Full-Stack Development, Automation Testing, and DevOps.
    </p>
    <div className="project-technologies">
      <div className="technology-button">React</div>
      <div className="technology-button">Vite</div>
      <div className="technology-button">Tailwind CSS</div>
      <div className="technology-button">Framer Motion</div>
      <div className="technology-button">Netlify</div>
      <div className="technology-button">DNS Management</div>
      <div className="technology-button">Custom Domain Setup</div>
      <div className="technology-button">SSL Configuration</div>
      <div className="technology-button">ESLint</div>
      <div className="technology-button">FontAwesome</div>
      <div className="technology-button">Performance Optimization</div>
      <div className="technology-button">Responsive Design</div>
    </div>
  </div>
</div>



    {/* Project: Vibez Tune Music App */}
<div
  className="project-card"
  onClick={() => window.open('https://vibez-tune-music-app.onrender.com', '_blank')} // Replace with your live demo link
>
  <img
    src={projectImage13} // Import your project image here
    alt="Vibez Tune Music App - Explore Music and Lyrics"
    className="project-image"
  />
  <div className="project-details">
    <h3>Vibez Tune Music App</h3>
    <p className="project-description">
      Explore and save your favorite songs, view lyrics, and create a personalized library. Built with the MERN stack, Apollo GraphQL, and JWT for secure authentication.
    </p>
    <div className="project-technologies">
      <div className="technology-button">React</div>
      <div className="technology-button">GraphQL</div>
      <div className="technology-button">Apollo</div>
      <div className="technology-button">MongoDB</div>
      <div className="technology-button">JWT</div>
      <div className="technology-button">Lyrics.ovh API</div>
      <div className="technology-button">Node.js</div>
      <div className="technology-button">Express.js</div>
      <div className="technology-button">Vite</div>
      <div className="technology-button">Bootstrap</div>
      <div className="technology-button">ESLint</div>
      <div className="technology-button">FontAwesome</div>
    </div>
  </div>
</div>


    {/* Project 5 */}
    <div className="project-card" onClick={() => window.open('https://github.com/BrockAltug/orm-ecom-backend', '_blank')}>
      <img
        src={projectImage05} // Import your project image here
        alt="E-Commerce Backend"
        className="project-image"
      />
      <div className="project-details">
        <h3>ORM Ecom Backend</h3>
        <p className="project-description">
          A backend API for managing an e-commerce platform with categories, products, and tags. Built using Node.js, Express, Sequelize, and PostgreSQL for scalable database management.
        </p>
        <div className="project-technologies">
          <div className="technology-button">Node.js</div>
          <div className="technology-button">Express.js</div>
          <div className="technology-button">Sequelize</div>
          <div className="technology-button">PostgreSQL</div>
          <div className="technology-button">Dotenv</div>
          <div className="technology-button">Insomnia</div>
        </div>
      </div>
    </div>

    {/* Project 9 */}
<div
  className="project-card"
  onClick={() => window.open('https://github.com/BrockAltug/express-note-taker', '_blank')}
>
  <img
    src={projectImage09} // Import your project image here
    alt="Note Taker - Efficient Note Taking App"
    className="project-image"
  />
  <div className="project-details">
    <h3>Express Note Taker</h3>
    <p className="project-description">
      A simple and efficient note-taking application for creating, viewing, and managing notes. Built with Node.js and Express.js, it features persistent storage and an intuitive interface, ensuring your ideas are always saved and accessible!
    </p>
    <div className="project-technologies">
      <div className="technology-button">Node.js</div>
      <div className="technology-button">Express.js</div>
      <div className="technology-button">JavaScript</div>
      <div className="technology-button">HTML</div>
      <div className="technology-button">CSS</div>
      <div className="technology-button">JSON</div>
      <div className="technology-button">CRUD</div>
      <div className="technology-button">UUID</div>
      <div className="technology-button">File System</div>
      <div className="technology-button">RESTful API</div>
    </div>
  </div>
</div>

    {/* Project 6 */}
    <div className="project-card" onClick={() => window.open('https://github.com/BrockAltug/social-media-app', '_blank')}>
      <img
        src={projectImage06} // Import your project image here
        alt="YourSpace - Social Media Platform"
        className="project-image"
      />
      <div className="project-details">
        <h3>Basic Social Media Platform</h3>
        <p className="project-description">
          An interactive social media platform to share posts, comments, and engage with others. Built with Node.js, PostgreSQL, and Express.js using MVC architecture for scalability.
        </p>
        <div className="project-technologies">
          <div className="technology-button">Node.js</div>
          <div className="technology-button">Express.js</div>
          <div className="technology-button">Sequelize</div>
          <div className="technology-button">PostgreSQL</div>
          <div className="technology-button">HTML</div>
          <div className="technology-button">CSS</div>
          <div className="technology-button">JavaScript</div>
          <div className="technology-button">Handlebars.js</div>
        </div>
      </div>
    </div>

    {/* Project 7 */}
    <div className="project-card" onClick={() => window.open('https://softedgedevelopment.github.io/seo-roadmap/', '_blank')}>
      <img
        src={projectImage07} // Import your project image here
        alt="SEO Roadmap - Boost Your Rankings"
        className="project-image"
      />
      <div className="project-details">
        <h3>SEO Roadmap</h3>
        <p className="project-description">
          An open-source guide to help users implement SEO strategies and improve website rankings. It covers SEO foundations, meta tags, and tools for optimization.
        </p>
        <div className="project-technologies">
          <div className="technology-button">SEO</div>
          <div className="technology-button">SEO Optimization</div>
          <div className="technology-button">Metadata</div>
          <div className="technology-button">Meta Tags</div>
          <div className="technology-button">SEO Tools</div>
        </div>
      </div>
    </div>

    {/* Project 1 */}
    <div className="project-card" onClick={() => window.open('https://github.com/BrockAltug/social-network-api', '_blank')}>
      <img
        src={projectImage01} // Import your project image here
        alt="Social Network API Backend"
        className="project-image"
      />
      <div className="project-details">
        <h3>NoSQL Social Network API</h3>
        <p className="project-description">
          A NoSQL backend for a social network app, supporting user profiles, thoughts, reactions, and friend lists. Built with Node.js, Express, MongoDB, and Mongoose.
        </p>
        <div className="project-technologies">
          <div className="technology-button">Node.js</div>
          <div className="technology-button">Express.js</div>
          <div className="technology-button">MongoDB</div>
          <div className="technology-button">Mongoose</div>
          <div className="technology-button">Dotenv</div>
          <div className="technology-button">Insomnia</div>
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card" onClick={() => window.open('https://github.com/BrockAltug/mern-book-search-engine', '_blank')}>
      <img
        src={projectImage02} // Import your project image here
        alt="MERN Book Search Engine with GraphQL"
        className="project-image"
      />
      <div className="project-details">
        <h3>MERN Book Search Engine</h3>
        <p className="project-description">
          A MERN stack book search engine refactored to use GraphQL and Apollo. Integrated with Google Books API for real-time book search and deployed on Render with MongoDB Atlas.
        </p>
        <div className="project-technologies">
          <div className="technology-button">React</div>
          <div className="technology-button">Node.js</div>
          <div className="technology-button">GraphQL</div>
          <div className="technology-button">Apollo</div>
          <div className="technology-button">MongoDB</div>
          <div className="technology-button">Express.js</div>
          <div className="technology-button">JWT Authentication</div>
        </div>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card" onClick={() => window.open('https://github.com/BrockAltug/mvc-tech-blog', '_blank')}>
      <img
        src={projectImage03}  // Use the imported image path for your new project image
        alt="MVC Tech Blog"
        className="project-image"
      />
      <div className="project-details">
        <h3>MVC Tech Blog</h3>
        <p className="project-description">
          A CMS-style blog built using the MVC architecture. It allows developers to publish posts, comment, and share their thoughts on tech using Express.js, Sequelize, and Handlebars.js.
        </p>
        <div className="project-technologies">
          <div className="technology-button">Node.js</div>
          <div className="technology-button">Express.js</div>
          <div className="technology-button">PostgreSQL</div>
          <div className="technology-button">Sequelize</div>
          <div className="technology-button">Handlebars.js</div>
        </div>
      </div>
    </div>

    {/* Project 4 */}
    <div className="project-card" onClick={() => window.open('https://github.com/BrockAltug/pwa-text-editor', '_blank')}>
      <img
        src={projectImage04} // Import your image here
        alt="JATE - Just Another Text Editor"
        className="project-image"
      />
      <div className="project-details">
        <h3>PWA Text Editor</h3>
        <p className="project-description">
          A progressive web app (PWA) for offline text editing. Features IndexedDB for data storage and a service worker for caching, offering a seamless offline experience.
        </p>
        <div className="project-technologies">
          <div className="technology-button">Node.js</div>
          <div className="technology-button">Webpack</div>
          <div className="technology-button">Service Worker</div>
          <div className="technology-button">PWA</div>
          <div className="technology-button">IndexedDB</div>
        </div>
      </div>
    </div>

    {/* Project 8 */}
    <div className="project-card" onClick={() => window.open('https://brockaltug.github.io/sql-employee-tracker/', '_blank')}>
      <img
        src={projectImage08} // Import your project image here
        alt="Employee Tracker - Manage Employee Database"
        className="project-image"
      />
      <div className="project-details">
        <h3>SQL Employee Tracker</h3>
        <p className="project-description">
          Command-line application to manage employees, roles, and departments. Built with Node.js, PostgreSQL, and Inquirer, providing a simple and effective CLI interface.
        </p>
        <div className="project-technologies">
          <div className="technology-button">Node.js</div>
          <div className="technology-button">PostgreSQL</div>
          <div className="technology-button">Inquirer</div>
          <div className="technology-button">CLI</div>
          <div className="technology-button">CRUD</div>
        </div>
      </div>
    </div>


{/* Project: Weather Dashboard */}
<div
  className="project-card"
  onClick={() => window.open('https://brockaltug.github.io/server-side-api-weather-dashboard/', '_blank')}
>
  <img
    src={projectImage10} 
    alt="Weather Dashboard - Dynamic Weather App"
    className="project-image"
  />
  <div className="project-details">
    <h3>Server Side API Weather Dashboard</h3>
    <p className="project-description">
      A dynamic weather dashboard that allows users to search for cities and view current weather conditions and a 5-day forecast using the OpenWeatherMap API. Search history is saved for convenience!
    </p>
    <div className="project-technologies">
      <div className="technology-button">JavaScript</div>
      <div className="technology-button">CSS</div>
      <div className="technology-button">HTML</div>
      <div className="technology-button">API</div>
      <div className="technology-button">LocalStorage</div>
    </div>
  </div>
</div>


{/* Project: SVG Logo Maker */}
<div
  className="project-card"
  onClick={() => window.open('https://brockaltug.github.io/oop-svg-logo-maker/', '_blank')}
>
  <img
    src={projectImage11} 
    alt="SVG Logo Maker - Customizable Logo Generator"
    className="project-image"
  />
  <div className="project-details">
    <h3>OOP SVG Logo Maker</h3>
    <p className="project-description">
      A Node.js command-line tool that allows users to easily create customizable SVG logos by choosing text, colors, and shapes through interactive prompts. Includes robust unit testing with Jest to ensure functionality and input handling.
    </p>
    <div className="project-technologies">
      <div className="technology-button">Node.js</div>
      <div className="technology-button">JavaScript</div>
      <div className="technology-button">SVG</div>
      <div className="technology-button">NPM</div>
      <div className="technology-button">Unit Testing</div>
      <div className="technology-button">Jest</div>
      <div className="technology-button">Inquirer</div>
    </div>
  </div>
</div>

{/* Project: README Generator */}
<div
  className="project-card"
  onClick={() => window.open('https://brockaltug.github.io/nodejs-readme-generator/', '_blank')}
>
  <img
    src={projectImage12} // Import your project image here
    alt="README Generator - CLI Tool for Professional READMEs"
    className="project-image"
  />
  <div className="project-details">
    <h3>NodeJS README Generator</h3>
    <p className="project-description">
      A CLI tool that generates a complete README.md file with sections like title, description, installation, usage, and more based on user input. Streamline your documentation process with ease!
    </p>
    <div className="project-technologies">
      <div className="technology-button">Node.js</div>
      <div className="technology-button">File System</div>
      <div className="technology-button">Inquirer</div>
    </div>
  </div>
</div>



  </div>
</section>

















<footer className="footer">
  <div className="footer-content">
    {/* GitHub Stats Section */}
    <div className="github-stats-container">
      {/* Overall GitHub Stats */}
      <img
        src="https://github-readme-stats.vercel.app/api?username=brockaltug&show_icons=true&theme=graywhite"
        alt="GitHub Stats"
        className="github-card"
      />
      {/* Top Languages */}
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=brockaltug&layout=compact&theme=graywhite&card_width=300"
        alt="Most Used Languages"
        className="github-card"
      />
    </div>

    <div className="footer-right">
      {/* Social Links */}
      <div className="footer-social-links">
        <a
          href="https://github.com/BrockAltug"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://linkedin.com/in/BrockAltug"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:altugba99@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      {/* Download Buttons */}
      <div className="download-buttons-container">
        <button className="download-portfolio-btn" onClick={exportToJPG}>
          Download Portfolio (JPG)
        </button>
        <button className="download-portfolio-btn" onClick={exportToPDFHighRes}>
          Download Portfolio (PDF)
        </button>
      </div>

      {/* Footer Copyright */}
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Brock Altug. All Rights Reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};





export default Brock;