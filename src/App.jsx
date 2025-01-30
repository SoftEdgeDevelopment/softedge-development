import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DigitalStrategy from "./pages/services/DigitalStrategy";
import AgileManagement from "./pages/services/AgileManagement";
import BigDataAndDataScience from "./pages/services/BigDataAndDataScience";
import CloudInfrastructures from "./pages/services/CloudInfrastructures";
import QualityAndTestAutomation from "./pages/services/QualityAndTestAutomation";
import UserExperienceDesign from "./pages/services/UserExperienceDesign";
import Outro from "./components/Outro";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Brock from "./pages/Brock"; // ✅ Import Brock page
import Error from "./components/Error"; // ✅ Import Error component for invalid routes
import Donate from "./pages/Donate"; // ✅ Import Donate page
import Donation from "./components/Donation"; // ✅ Import Donation component


// Import individual blog post pages
import Post01 from "./pages/blog/Post01";
import Post02 from "./pages/blog/Post02";
import Post03 from "./pages/blog/Post03";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/brock-altug" element={<Brock />} /> {/* ✅ Brock page added */}

        {/* Service Pages */}
        <Route path="/services/digital-strategy" element={<DigitalStrategy />} />
        <Route path="/services/agile-management" element={<AgileManagement />} />
        <Route path="/services/big-data-data-science" element={<BigDataAndDataScience />} />
        <Route path="/services/cloud-infrastructures" element={<CloudInfrastructures />} />
        <Route path="/services/quality-test-automation" element={<QualityAndTestAutomation />} />
        <Route path="/services/user-experience-design" element={<UserExperienceDesign />} />

        {/* Legal Pages */}
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Blog Post Pages */}
        <Route path="/blog/post-01" element={<Post01 />} />
        <Route path="/blog/post-02" element={<Post02 />} />
        <Route path="/blog/post-03" element={<Post03 />} />

        {/* Donation Page */}
        <Route path="/donate" element={<Donate />} />

        {/* Catch-all route for non-existent pages */}
        <Route path="*" element={<Error />} /> {/* ✅ Handles 404 errors */}
      </Routes>
      <Outro />
      
      <Footer />
      <Donation />
      <Copyright />
      
    </Router>
  );
}

export default App;