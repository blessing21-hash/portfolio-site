// import React from 'react';
// import './Projects2.css';

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




import React, { useState } from 'react';
import './Projects2.css';
import buildlinkImg from '../assets/buildlink.png';
import resumeImg from '../assets/resume.png';
import wiremiteImg from '../assets/wiremite.jpeg';
import parkingImg from '../assets/parking-finder.png';
import todoImg from '../assets/todo.png';
import weatherImg from '../assets/weather.png';

const allProjects = [
  {
    title: 'BuildLink',
    description: 'A handyman services platform...',
    tech: ['React', 'TailwindCSS', 'Router'],
    image: buildlinkImg,
    link: 'https://github.com/blessing21-hash/buildlink',
  },
  {
    title: 'React Resume',
    description: 'Responsive resume built with React...',
    tech: ['React', 'CSS', 'PDF'],
    image: resumeImg,
    link: 'blessy.pdf',
  },

  // https://github.com/yourusername/react-resume
  // {
  //   title: 'Portfolio Website',
  //   description: 'Personal dev portfolio with animations...',
  //   tech: ['React', 'CSS'],
  //   image: portfolioImg,
  //   link: '/',
  // },
  {
       title: 'Wiremite App',
       description: 'An application that sends money',
       tech: ['React', 'CSS'],
      image: wiremiteImg,
       link: 'https://wiremite-app.vercel.app/',
     },
  {
    title: 'Parking Space Finder',
    description: 'Book parking spots with live maps.',
    tech: ['React', 'Google Maps API'],
    image: parkingImg,
    link: ' https://parkade-fcju.vercel.app/',
  },
  {
    title: 'Todo Tracker App',
    description: 'Minimal to-do tracker with dark mode.',
    tech: ['React', 'LocalStorage'],
    image: todoImg,
    link: 'https://todo-tracker-snowy.vercel.app/',
  },
  {
    title: 'Weather Dashboard',
    description: 'Weather app using OpenWeather API.',
    tech: ['HTML', 'CSS', 'JavaScript', 'API'],
    image: weatherImg,
    link: 'https://github.com/yourusername/weather-dashboard',
  },
];

const getAllTags = (projects) => {
  const tagSet = new Set();
  projects.forEach(p => p.tech.forEach(t => tagSet.add(t)));
  return ['All', ...Array.from(tagSet)];
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const tags = getAllTags(allProjects);

  const handleFilter = (tag) => {
    setActiveFilter(tag);
    if (tag === 'All') {
      setFilteredProjects(allProjects);
    } else {
      const filtered = allProjects.filter(project => project.tech.includes(tag));
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="filter-buttons">
          {tags.map((tag, i) => (
            <button
              key={i}
              className={`filter-btn ${activeFilter === tag ? 'active' : ''}`}
              onClick={() => handleFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-img" />
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
