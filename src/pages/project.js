import { useEffect, useState } from 'react';

export default function Project() {
  const [Data, setData] = useState({});

  useEffect(() => {
    // Fetch data from your API route
    fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching profile data:', error));
  }, []);
  return (
    <main className=" m-6">
      Projects Page
       <h1>Project 1</h1>
{       <p>{Data.data[0].name}</p>}
       <h1>Project 2</h1>
{       <p>{Data.data[1].name}</p>}
    </main>
  )
}
