import React from 'react';
import '../style/Home.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.avif';
import userImage1 from '../assets/user1.jpg.jpg'
import userImage2 from '../assets/user2.jpg.webp';


const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Header */}
      <header>
        <div className="logo">
          <img src={logo} alt="Platform Logo" />
        </div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        
    <div className="auth-links">
  <button onClick={() => navigate('/user')}>User Login</button>
  <button onClick={() => navigate('/admin')}>Admin Login</button>
</div>
 </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Your Coding Journey</h1>
          <p>Streamlined assessments, personalized learning paths, and more.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-cards">
          <FeatureCard title="Simple Interface" description="Intuitive design for a smooth experience." icon="🔧" />
          <FeatureCard title="Detailed Feedback" description="Comprehensive insights for improvement." icon="📊" />
          <FeatureCard title="Offline Capabilities" description="Learn anytime, anywhere." icon="📚" />
          <FeatureCard title="Soft Skills Assessments" description="Develop skills beyond coding." icon="💼" />
          <FeatureCard title="LMS Integration" description="Seamless integration with your college's systems." icon="🔗" />
          <FeatureCard title="Multi-Language Support" description="Code in the language you're comfortable with." icon="🌐" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <TestimonialCard imageSrc={userImage1} quote="This platform transformed my coding skills!" name="Rajesh Kumar" />
          <TestimonialCard imageSrc={userImage2} quote="I love the personalized assessments!" name="Priya Singh" />
          {/* Add more testimonials as needed */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="call-to-action">
        <h2>Ready to Boost Your Coding Skills?</h2>
        <p>Join thousands of students already learning with us.</p>
        <button className="cta-button">Sign Up Now</button>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
        <div className="social-media">
          <a href="#facebook">FB</a>
          <a href="#twitter">TW</a>
          <a href="#linkedin">LI</a>
        </div>
        <div className="newsletter">
          <input type="email" placeholder="Your email" />
          <button className="subscribe-button">Subscribe</button>
        </div>
        <div className="footer-bottom">© 2024 Coding Test Platform</div>
      </footer>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, icon }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Testimonial Card Component
const TestimonialCard = ({ imageSrc, quote, name }) => (
  <div className="testimonial-card">
    <img src={imageSrc} alt={name} className="user-image" />
    <p className="quote">{quote}</p>
    <p className="user-name">- {name}</p>
  </div>
);

export default HomePage;   








// // src/pages/HomePage.js
// import React from 'react';
// import '../style/Home.css';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/logo.avif';

// const HomePage = () => {
//   const navigate = useNavigate();

//   return (
//     <div>
//       {/* Header */}
//       <header>
//         <div className="logo">
//           <img src={logo} alt="Platform Logo" />
//         </div>
//         <nav>
//           <ul className="nav-links">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#features">Features</a></li>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#contact">Contact Us</a></li>
//           </ul>
//         </nav>
//         <div className="auth-buttons">
//           <button className="sign-in" onClick={() => navigate('/login-register')}>Sign In</button>
//           <button className="sign-up" onClick={() => navigate('/admin-auth')}>Sign Up</button>
//         </div>
//       </header>
//       {/* Other sections remain the same */}
//     </div>
//   );
// };

// export default HomePage;
