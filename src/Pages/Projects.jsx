// import React from 'react';
// import './Projects.css';

// const projects = [
//   {
//     title: 'BuildLink',
//     description: 'A handyman services platform with category filtering, job posting, and service listings.',
//     tech: ['React', 'TailwindCSS', 'React Router'],
//     link: 'https://your-buildlink-live-site.com',
//   },
//   {
//     title: 'React Resume',
//     description: 'A responsive online resume built with React and downloadable as PDF.',
//     tech: ['React', 'CSS', 'react-to-print'],
//     link: 'https://github.com/yourusername/react-resume',
//   },
//   {
//     title: 'Portfolio Website',
//     description: 'This very portfolio showcasing my skills, projects, and contact info.',
//     tech: ['React', 'CSS', 'Responsive Design'],
//     link: '/',
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="projects-section">
//       <div className="projects-container">
//         <h2>Projects</h2>
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <div key={index} className="project-card">
//               <h3>{project.title}</h3>
//               <p className="description">{project.description}</p>
//               <div className="tech-stack">
//                 {project.tech.map((tech, i) => (
//                   <span key={i}>{tech}</span>
//                 ))}
//               </div>
//               <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Projects2 from '../Pages/Projects2';
import Footer from '../Components/Footer';

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects">
      <Header />
      <Projects2/>

      <Footer />
    </div>
  );
};

export default Projects;
