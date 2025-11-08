import { useState, createContext } from "react";
//import data
import data from "./asset/data.json";
//pages
import Home from "./pages/Home.jsx";
import Crew from "./pages/Crew.jsx";
import Destination from "./pages/Destination.jsx";
import Technology from "./pages/Technology.jsx";

// the context that should be transfered to nav component from APP
const navContext = createContext(null);
// to categorize better the data for each page
const planetsDestination = data.destinations;
const crewDetail = data.crew;
const technoDetail = data.technology;

function App() {
  // always load the home page
  const [page, setPage] = useState("Home");
  const [destinationPage, setDestinationPage] = useState(false);

  return (
    <>
      <navContext.Provider value={{ page, setPage }}>
        {page === "Home" && (
          <Home
            setpage={setPage}
            isdestinationasked={destinationPage}
            setDestinationPage={setDestinationPage}
            dataForDestination={planetsDestination}
          />
        )}

        {page === "Destination" && <Destination data={planetsDestination} />}
        {page === "Crew" && <Crew data={crewDetail} />}
        {page === "Technology" && <Technology data={technoDetail} />}
      </navContext.Provider>
    </>
  );
}

export default App;
export { navContext };
