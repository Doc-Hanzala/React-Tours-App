import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data)
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };

  useEffect(() => {
    getTours();
  }, []);

  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
     
    
  
  }

 return(
  <main>
    <Tours tours={tours} />
  </main>
 )
}

export default App;
