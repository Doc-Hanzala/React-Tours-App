import { createContext, useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

export const DelToursContext = createContext();

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const delTours = (id) => {
    const updatedTours = tours.filter((tour) => tour.id !== id);
    setTours(updatedTours);
  };

  useEffect(() => {
    getTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h3>No Tours Left</h3>
          <div className="title-underline"></div>
        </div>
        <button onClick={getTours} className="btn">
          Refresh
        </button>
      </main>
    );
  }

  return (
    <DelToursContext.Provider value={{ delTours }}>
      <main>
        <Tours tours={tours} />
      </main>
    </DelToursContext.Provider>
  );
}

export default App;
