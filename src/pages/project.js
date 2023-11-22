import { useEffect, useState } from 'react';

export default function Project() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    <h1>Projects</h1>
    <ul>
      {projects.map((project) => (
        <li key={project.id}>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
        </li>
      ))}
    </ul>
  </div>
  )
}
