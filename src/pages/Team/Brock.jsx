import profileImage from '../../../public/assets/profile.png';
import projectImageSoftEdge from '../../../public/assets/project-softedge.png';
import projectImage01 from '../../../public/assets/project-01.png';
import projectImage02 from '../../../public/assets/project-02.png';
import projectImage03 from '../../../public/assets/project-03.png';
import projectImage04 from '../../../public/assets/project-04.png';
import projectImage05 from '../../../public/assets/project-05.png';
import projectImage06 from '../../../public/assets/project-06.png';
import projectImage07 from '../../../public/assets/project-07.png';
import projectImage08 from '../../../public/assets/project-08.png';
import projectImage09 from '../../../public/assets/project-09.png';
import projectImage10 from '../../../public/assets/project-10.png';
import projectImage11 from '../../../public/assets/project-11.png';
import projectImage12 from '../../../public/assets/project-12.png';
import projectImage13 from '../../../public/assets/project-13.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import "./Brock.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "../../../public/assets/background.png"; // ✅ Background Image
import styled from "styled-components";

// Background container for full-screen effect
const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1; // Ensure it stays behind content
  display: flex;
  justify-content: center;
  align-items: center;

  /* Background Image */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${backgroundImage}) no-repeat center center/cover;
    filter: blur(20px) brightness(1.3) opacity(0.6); // Adjust effects
  }
`;

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

  const exportToPDFHighRes = async () => {
    const element = document.querySelector(".app-container");
    if (!element) {
      console.error("Container element not found for PDF export");
      return;
    }
  
    try {
      // Select the background element
      const backgroundElement = document.querySelector(".background-container");
  
      // Save the original background style to restore later
      const originalBackground = backgroundElement ? backgroundElement.style.display : "";
  
      // **Completely remove the background**
      if (backgroundElement) {
        backgroundElement.style.display = "none";
      }
  
      // Wait for the background to be removed
      await new Promise((resolve) => setTimeout(resolve, 300));
  
      // Capture the full page **without** background
      const canvas = await html2canvas(element, {
        scale: 2, // Higher resolution
        useCORS: true,
        backgroundColor: "#FFFFFF", // Set white background for clean PDF
        logging: false,
        removeContainer: true,
      });
  
      // Restore the background **after export**
      if (backgroundElement) {
        backgroundElement.style.display = originalBackground;
      }
  
      // Convert to image
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
  
      const imgWidth = 210; // A4 width
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let yOffset = 0;
  
      // Multi-page PDF handling
      while (yOffset < imgHeight) {
        if (yOffset > 0) pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, -yOffset, imgWidth, imgHeight);
        yOffset += 297; // A4 page height
      }
  
      // Save PDF
      pdf.save("brockaltug-portfolio.pdf");
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  

  return (
    <>
      {/* Background should be placed outside the main container */}
      <BackgroundContainer />
  
      {/* Main App Container */}
      <div className="app-container">
        
        {/* Header Section */}
        <header className="header-container">
          <div className="header-content">
            <div className="header-text">
              {/* Name & Title */}
              <p className="header-title">Brock Altug</p>
              <p className="header-subtitle">Full Stack Developer / Automation Tester</p>
  
              {/* Location */}
              <p className="header-location">
                <FontAwesomeIcon icon={faGlobe} /> Seattle, Washington, USA
              </p>
              {/* Phone Number */}
              <p className="header-phone">
                <FontAwesomeIcon icon={faPhone} /> (206) 739-7583
              </p>

              {/* Email */}
              <p className="header-email">
                <FontAwesomeIcon icon={faEnvelope} /> 
                <a href="mailto:altugba99@gmail.com"> altugba99@gmail.com</a>
              </p>
  
              {/* LinkedIn */}
              <p className="header-phone">
                <FontAwesomeIcon icon={faLinkedin} /> 
                <a href="https://linkedin.com/in/brock-altug" target="_blank" rel="noopener noreferrer"> linkedin.com/in/brock-altug </a>
              </p>
  
              {/* GitHub */}
              <p className="header-phone">
                <FontAwesomeIcon icon={faGithub} /> 
                <a href="https://github.com/BrockAltug" target="_blank" rel="noopener noreferrer"> github.com/BrockAltug </a>
              </p>
  
  
              
  
              
            </div>
  
            {/* Profile Image */}
            <div className="header-image">
              <img src={profileImage} alt="Brock Altug" className="profile-image" />
            </div>
          </div>
        </header>

      <section className="about-section">
  <h2 className="section-titleee">About Me</h2>
  <p className="about-paragraph">
    With a solid foundation in <strong>Full Stack Development</strong> and <strong>Automation Testing</strong>, I am committed to delivering innovative, scalable, and efficient software solutions tailored to diverse needs. My expertise spans both front-end and back-end technologies, including building user-focused applications with frameworks like React.js, Angular, and Node.js, as well as designing and implementing secure, high-performance server-side architectures. Proficient in creating and consuming RESTful APIs and GraphQL APIs, I excel in implementing robust authentication and authorization mechanisms, including OAuth, JWT, and secure session management. Additionally, I bring hands-on experience in automation testing, containerization, CI/CD pipelines, and modern DevOps practices to ensure the delivery of reliable, high-quality software solutions that drive operational excellence.
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

  <div className="stacks-containerr">
  <h2 className="section-titleee">Stacks</h2>
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
    "React", "Redux", "Next.js", "Tailwind CSS", "Bootstrap", "SASS", "jQuery", "Vue.js", "Angular", "Material-UI",

    // Back-End Development
    "Python", "Java", "Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs", "WebSockets", "Microservices", "FastAPI", "Spring Boot",
    
    // Databases & Data Management
    "MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite", "Mongoose", "Sequelize", "TypeORM", "Firebase", "DynamoDB", "Cassandra",

    // Testing & Automation
    "Selenium WebDriver", "TestNG", "JUnit", "Cucumber BDD", "REST Assured", "Postman", "Jest", "Mocha", "Chai", "Cypress", 
    "Playwright", "K6", "JMeter", "Appium", "LoadRunner",

    // DevOps & Containerization
    "Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins", "GitHub Actions", "AWS", "GCP", "Azure", "Terraform", "Ansible",
    "CircleCI", "Bitbucket Pipelines", "Bamboo", "CloudFormation", "Helm", "Vagrant",

    // Version Control & Collaboration
    "Git", "GitHub", "Bitbucket", "GitLab", "SVN", "Mercurial",

    // Cloud & Serverless
    "AWS Lambda", "AWS EC2", "AWS S3", "AWS RDS", "GCP App Engine", "GCP Functions", "Azure Functions", "Serverless Framework",
    "Firebase Functions", "Cloudflare Workers",

    // Security & Authentication
    "OAuth", "JWT", "SAML", "2FA", "HTTPS", "SSL/TLS", "CORS", "OWASP", "Penetration Testing", "Zero Trust Architecture",

    // Performance Optimization
    "Caching", "Load Balancing", "Compression", "Minification", "Lazy Loading", "Code Splitting", "Database Indexing", 
    "Redis Caching", "CDN Optimization",

    // Agile & Methodologies
    "Agile", "Scrum", "Kanban", "Jira", "Confluence", "Trello", "Asana", "CI/CD", "TDD", "BDD", "SAFe",

    // Architecture & Design Patterns
    "MVC", "MVVM", "Microservices Architecture", "RESTful Services", "Event-Driven Architecture", "CQRS", "Domain-Driven Design",
    "Monolithic vs Microservices", "Hexagonal Architecture",

    // Other Tools & Technologies
    "Nginx", "Apache", "Vercel", "Netlify", "Heroku", "WordPress", "Shopify", "Contentful", "WebRTC", "Socket.IO", 
    "Electron.js", "Figma", "Adobe Photoshop", "Blender", "Tiled", "Unity3D", "Flutter", "React Native"
  ].map((skill) => (
    <button
      key={skill}
      className="stack-button"
      onClick={() => window.open(`https://en.wikipedia.org/wiki/${skill.replace(/ /g, "_")}`, "_blank")}
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
      <div className="technology-buttonn">React.js</div>
      <div className="technology-buttonn">Node.js</div>
      <div className="technology-buttonn">MongoDB</div>
      <div className="technology-buttonn">RESTful APIs</div>
      <div className="technology-buttonn">GraphQL</div>
      <div className="technology-buttonn">Tailwind CSS</div>
      <div className="technology-buttonn">Bootstrap</div>
      <div className="technology-buttonn">Docker</div>
      <div className="technology-buttonn">Kubernetes</div>
      <div className="technology-buttonn">AWS</div>
      <div className="technology-buttonn">GCP</div>
    </div>
  </div>

  {/* QA Engineer */}
  <div className="experience-item">
    <div className="experience-header">
      <div className="experience-left">
        <h3 className="experience-title">QA Engineer</h3>
        <p className="experience-company">BOSS Holding Company LLC</p>
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
      <div className="technology-buttonn">Java</div>
      <div className="technology-buttonn">Selenium WebDriver</div>
      <div className="technology-buttonn">TestNG</div>
      <div className="technology-buttonn">Cucumber BDD</div>
      <div className="technology-buttonn">REST Assured</div>
      <div className="technology-buttonn">Postman</div>
      <div className="technology-buttonn">Docker</div>
      <div className="technology-buttonn">Cypress</div>
      <div className="technology-buttonn">Jenkins</div>
      <div className="technology-buttonn">GitHub Actions</div>
    </div>
  </div>

  {/* QA Intern */}
  <div className="experience-item">
    <div className="experience-header">
      <div className="experience-left">
        <h3 className="experience-title">QA Intern</h3>
        <p className="experience-company">Mersys.io</p>
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
      <div className="technology-buttonn">Java</div>
      <div className="technology-buttonn">Selenium</div>
      <div className="technology-buttonn">Maven</div>
      <div className="technology-buttonn">Cucumber</div>
      <div className="technology-buttonn">Selenium Grid</div>
      <div className="technology-buttonn">Postman</div>
    </div>
  </div>

  {/* Junior IT Specialist */}
  <div className="experience-item">
    <div className="experience-header">
      <div className="experience-left">
        <h3 className="experience-title">Junior IT Specialist</h3>
        <p className="experience-company">BOSS Holding Company LLC</p>
        <div className="job-tags">
          <div className="tag-button">ON-SITE</div>
          <div className="tag-button">FULLTIME</div>
        </div>
      </div>
      <p className="experience-date">Oct 2020 - Dec 2021</p>
    </div>
    <p className="experience-description">
    Provided technical support for end users, assisting in troubleshooting hardware, software, and network-related issues 
    to ensure operational efficiency. Installed, configured, and maintained workstations, ensuring up-to-date system software 
    and security patches. Conducted routine system audits to identify and resolve performance bottlenecks, improving 
    reliability and minimizing downtime. Assisted in the migration of legacy systems to cloud-based platforms, enhancing data 
    accessibility and security. Maintained detailed documentation of IT assets, troubleshooting steps, and resolved technical 
    issues to streamline future support requests.
    </p>
    <div className="technologies-buttons">
      <div className="technology-buttonn">Technical Support</div>
      <div className="technology-buttonn">System Configuration</div>
      <div className="technology-buttonn">Network Troubleshooting</div>
      <div className="technology-buttonn">Cloud Migration</div>
      <div className="technology-buttonn">IT Asset Management</div>
      <div className="technology-buttonn">System Audits</div>
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
      <div className="technology-buttonn">React.js</div>
      <div className="technology-buttonn">Node.js</div>
      <div className="technology-buttonn">MongoDB</div>
      <div className="technology-buttonn">Express.js</div>
      <div className="technology-buttonn">GraphQL</div>
      <div className="technology-buttonn">Docker</div>
      <div className="technology-buttonn">Kubernetes</div>
      <div className="technology-buttonn">CI/CD Pipelines</div>
    </div>
  </div>

  {/* Software Development Engineer in Testing Bootcamp */}
  <div className="education-item">
    <div className="education-header">
      <div className="education-left">
        <h3 className="education-title">(SDET) QA Engineer Bootcamp</h3>
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
      <div className="technology-buttonn">Selenium WebDriver</div>
      <div className="technology-buttonn">TestNG</div>
      <div className="technology-buttonn">Cucumber BDD</div>
      <div className="technology-buttonn">REST Assured</div>
      <div className="technology-buttonn">Postman</div>
      <div className="technology-buttonn">Jenkins</div>
      <div className="technology-buttonn">GitHub Actions</div>
    </div>
  </div>

  {/* Bachelor's Degree in Computer Science */}
  <div className="education-item">
    <div className="education-header">
      <div className="education-left">
        <h3 className="education-title">Associates’s Degree in CS</h3>
        <p className="education-company">Renton Technical College</p>
        <div className="job-tags">
          <div className="tag-button">Completed Jun 2022</div>
        </div>
      </div>
      <p className="education-date">Sep 2020 - Jun 2022</p>
    </div>
    <p className="education-description">
      Developed a strong foundation in computer science principles, including data structures, algorithms, and software engineering. Gained hands-on experience in programming languages like Java, Python, and C++. Specialized in database management, application architecture, and system design, with a focus on relational and NoSQL databases.
    </p>
    <div className="technologies-buttons">
      <div className="technology-buttonn">Java</div>
      <div className="technology-buttonn">Python</div>
      <div className="technology-buttonn">C++</div>
      <div className="technology-buttonn">Data Structures</div>
      <div className="technology-buttonn">Algorithms</div>
      <div className="technology-buttonn">Database Design</div>
      <div className="technology-buttonn">SQL</div>
    </div>
  </div>

  {/* Certifications Section */}
<div className="education-item">
  <div className="education-header">
    <h3 className="education-titlee">Certifications</h3>
  </div>
  
  <div className="certifications-list">
  <div className="certification-button">
    Certified Full Stack Web Developer
    <span>University of California, Berkeley - Jan 2025</span> 
  </div>
  <div className="certification-button">
    Certified Software Developer and Engineer in Testing (SDET) <span>Mersys.io - Jul 2023</span>
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
    
    
  
  </div>
</div>



    {/* Project: Vibez Tune Music App */}
<div
  className="project-card"
  onClick={() => window.open('https://vibez-tune-music-app.onrender.com', '_blank')} // Live demo link
>
  <img
    src={projectImage13} // Import your project image here
    alt="Vibez Tune Music App - Explore Music and Lyrics"
    className="project-image"
  />
  <div className="project-details">
    <h3>Vibez Tune Music App</h3>
   
    
  </div>
</div>


    {/* Project: ORM Ecom Backend */}
<div
  className="project-card"
  onClick={() => window.open('https://github.com/BrockAltug/orm-ecom-backend', '_blank')} // GitHub repo link
>
  <img
    src={projectImage05} // Import your project image here
    alt="E-Commerce Backend"
    className="project-image"
  />
  <div className="project-details">
    <h3>ORM Ecom Backend</h3>
    
    
  </div>
</div>

    {/* Project: Express Note Taker */}
<div
  className="project-card"
  onClick={() => window.open('https://github.com/BrockAltug/express-note-taker', '_blank')} // GitHub repo link
>
  <img
    src={projectImage09} // Import your project image here
    alt="Note Taker - Efficient Note Taking App"
    className="project-image"
  />
  <div className="project-details">
    <h3>Express Note Taker</h3>
    
    
  </div>
</div>

    {/* Project: Basic Social Media Platform */}
<div
  className="project-card"
  onClick={() => window.open('https://github.com/BrockAltug/social-media-app', '_blank')} // GitHub repo link
>
  <img
    src={projectImage06} // Import your project image here
    alt="YourSpace - Social Media Platform"
    className="project-image"
  />
  <div className="project-details">
    <h3>Basic Social Media Platform</h3>
    
    
  </div>
</div>

    {/* Project: SEO Roadmap */}
<div
  className="project-card"
  onClick={() => window.open('https://softedgedevelopment.github.io/seo-roadmap/', '_blank')} // Live project link
>
  <img
    src={projectImage07} // Import your project image here
    alt="SEO Roadmap - Boost Your Rankings"
    className="project-image"
  />
  <div className="project-details">
    <h3>SEO Roadmap</h3>
    
    
  </div>
</div>

    {/* Project: NoSQL Social Network API */}
<div
  className="project-card"
  onClick={() => window.open('https://github.com/BrockAltug/social-network-api', '_blank')} // GitHub repo link
>
  <img
    src={projectImage01} // Import your project image here
    alt="Social Network API Backend"
    className="project-image"
  />
  <div className="project-details">
    <h3>NoSQL Social Network API</h3>
    
  </div>
</div>

    {/* Project: MERN Book Search Engine */}
<div
  className="project-card"
  onClick={() => window.open('https://github.com/BrockAltug/mern-book-search-engine', '_blank')} // GitHub repo link
>
  <img
    src={projectImage02} // Import your project image here
    alt="MERN Book Search Engine with GraphQL"
    className="project-image"
  />
  <div className="project-details">
    <h3>MERN Book Search Engine</h3>
    
    
  </div>
</div>

    {/* Project: MVC Tech Blog */}
<div
  className="project-card"
  onClick={() => window.open('https://github.com/BrockAltug/mvc-tech-blog', '_blank')} // GitHub repo link
>
  <img
    src={projectImage03}  // Use the imported image path for your new project image
    alt="MVC Tech Blog"
    className="project-image"
  />
  <div className="project-details">
    <h3>MVC Tech Blog</h3>
   
    
  </div>
</div>

   {/* Project: PWA Text Editor */}
<div
  className="project-card"
  onClick={() => window.open('https://github.com/BrockAltug/pwa-text-editor', '_blank')} // GitHub repo link
>
  <img
    src={projectImage04} // Import your image here
    alt="JATE - Just Another Text Editor"
    className="project-image"
  />
  <div className="project-details">
    <h3>PWA Text Editor</h3>
   
    
  </div>
</div>

    {/* Project: SQL Employee Tracker */}
<div
  className="project-card"
  onClick={() => window.open('https://brockaltug.github.io/sql-employee-tracker/', '_blank')} // Live project link
>
  <img
    src={projectImage08} // Import your project image here
    alt="Employee Tracker - Manage Employee Database"
    className="project-image"
  />
  <div className="project-details">
    <h3>SQL Employee Tracker</h3>
    
    
  </div>
</div>


{/* Project: Weather Dashboard */}
<div
  className="project-card"
  onClick={() => window.open('https://brockaltug.github.io/server-side-api-weather-dashboard/', '_blank')} // Live project link
>
  <img
    src={projectImage10} 
    alt="Weather Dashboard - Dynamic Weather App"
    className="project-image"
  />
  <div className="project-details">
    <h3>Server Side API Weather Dashboard</h3>
    
    
  </div>
</div>


{/* Project: SVG Logo Maker */}
<div
  className="project-card"
  onClick={() => window.open('https://brockaltug.github.io/oop-svg-logo-maker/', '_blank')} // Live project link
>
  <img
    src={projectImage11} 
    alt="SVG Logo Maker - Customizable Logo Generator"
    className="project-image"
  />
  <div className="project-details">
    <h3>OOP SVG Logo Maker</h3>
    
    
  </div>
</div>

{/* Project: README Generator */}
<div
  className="project-card"
  onClick={() => window.open('https://brockaltug.github.io/nodejs-readme-generator/', '_blank')} // Live project link
>
  <img
    src={projectImage12} // Import your project image here
    alt="README Generator - CLI Tool for Professional READMEs"
    className="project-image"
  />
  <div className="project-details">
    <h3>NodeJS README Generator</h3>
    
    
  </div>
</div>



  </div>
</section>

















<footer className="footer">
  <div className="footer-content">
    

    <div className="footer-right">
      {/* Social Links */}
      <div className="footer-social-links">
      <a
          href="https://linkedin.com/in/BrockAltug"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      
        <a
          href="https://github.com/BrockAltug"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-link"
        >
          <FontAwesomeIcon icon={faGithub} />
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
  </div>
</footer>

    </div>
    </>
  );
};





export default Brock;