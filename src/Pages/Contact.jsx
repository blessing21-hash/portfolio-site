// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // For now, just simulate submission
//     setSubmitted(true);
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <section className="contact-section">
//       <div className="contact-container">
//         <h2>Contact Me</h2>
//         {submitted && <p className="submit-message">Thanks for reaching out! I'll get back to you soon.</p>}
//         <form onSubmit={handleSubmit} className="contact-form" noValidate>
//           <label>
//             Name
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Your name"
//             />
//           </label>

//           <label>
//             Email
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Your email"
//             />
//           </label>

//           <label>
//             Message
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               placeholder="Your message"
//               rows="5"
//             ></textarea>
//           </label>

//           <button type="submit" className="submit-btn">Send Message</button>
//         </form>

//         <div className="social-links">
//           <h3>Find me on</h3>
//           <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub">
//             GitHub
//           </a>
//           <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" aria-label="LinkedIn">
//             LinkedIn
//           </a>
//           {/* Add more social links if you want */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Contact2 from './Contact2';
import Footer from '../Components/Footer';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact">
      <Header />
      <Contact2/>

      <Footer />
    </div>
  );
};

export default Contact;
