import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx"; // ✅ Navbar should be inside Header
import Footer from "./components/Footer/Footer.jsx";
import Copyright from "./components/Footer/Copyright.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Careers from "./pages/Careers/Careers.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import WebDevelopment from "./pages/Services/WebDevelopment.jsx";
import QualityAndTestAutomation from "./pages/Services/QualityAndTestAutomation.jsx";
import UserExperienceDesign from "./pages/Services/UserExperienceDesign.jsx";
import Outro from "./components/Footer/Outro.jsx";
import TermsOfService from "./pages/Legal/TermsOfService.jsx";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy.jsx";
import Brock from "./pages/Team/Brock.jsx"; // ✅ Brock page added
import Error from "./components/Error/Error.jsx"; // ✅ Handles 404 errors

// Import individual blog post pages
import Post01 from "./pages/Blog/Post01.jsx";
import Post02 from "./pages/Blog/Post02.jsx";
import Post03 from "./pages/Blog/Post03.jsx";

function App() {
  return (
    <Router>
      
      <Header /> {/* ✅ Navbar should be inside Header */}
      
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brock-altug" element={<Brock />} /> {/* ✅ Brock page added */}

        {/* Service Pages */}
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/quality-test-automation" element={<QualityAndTestAutomation />} />
        <Route path="/services/user-experience-design" element={<UserExperienceDesign />} />

        {/* Legal Pages */}
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Blog Post Pages */}
        <Route path="/blog/post-01" element={<Post01 />} />
        <Route path="/blog/post-02" element={<Post02 />} />
        <Route path="/blog/post-03" element={<Post03 />} />

        {/* Catch-all route for non-existent pages */}
        <Route path="*" element={<Error />} /> {/* ✅ Handles 404 errors */}
      </Routes>
      
      <Outro />
      <Footer />
      <Copyright />
    </Router>
  );
}

export default App;