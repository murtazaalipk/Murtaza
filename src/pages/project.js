import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Project() {
  const [projects, setProjects] = useState([]);
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
    <ul className='flex gap-8 flex-col p-10'>
      {projects.map((project) => (
        <li key={project.id}>
          <h2 className=' text-2xl' >{project.name}</h2>
          <p>{project.description}</p>
          <Link className=' text-amber-600 ' href={project.url}>Click Me!</Link>
        </li>
      ))}
    </ul>
  </div>
  )
}
