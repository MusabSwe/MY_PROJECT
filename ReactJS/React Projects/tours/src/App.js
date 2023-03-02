import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter(t => t.id !== id);
    setTours(newTour);
  }
  // fetch Tours json file
  const fetchTours = async () => {

    setIsLoading(true);
    try {
      const res = await fetch(url);
      const tours = await res.json();
      setIsLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (e) {
      setIsLoading(false);
      console.log(e)
    }

  }
  // fetch data
  useEffect(() => {
    fetchTours();
  }, [url]);

  //Invoke loading during fetching Tours json file 
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} refresh={fetchTours} />
    </main>
  )
}

export default App