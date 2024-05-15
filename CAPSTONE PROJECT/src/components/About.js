import React from 'react';
import Project from './Project';
import './Projects.css';

const projectsData = [
  {
    title: "Project One",
    description: "Description for project one.",
    imageUrl: "%PUBLIC_URL%/images/project-one.png" // Replace with your image path
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    imageUrl: "%PUBLIC_URL%/images/project-two.png" // Replace with your image path
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="Projects">
      <h2>Projects</h2>
      <div className="Projects-list">
        {projectsData.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
