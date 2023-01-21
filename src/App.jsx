import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";
import {
  popularMovies,
  topRated,
  upComing,
  originals,
  comedy,
  horror,
  action,
  documentary,
} from "./URLs";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <RowPost title={"Originals"} url={originals} isBig />
      </div>
      <div>
        <RowPost title={"Popular"} url={popularMovies} />
      </div>
      <div>
        <RowPost title={"Top Rated"} url={topRated} />
      </div>
      <div>
        <RowPost title={"Upcoming"} url={upComing} />
      </div>
      <div>
        <RowPost title={"Comedy"} url={comedy} />
      </div>
      <div>
        <RowPost title={"Horror"} url={horror} />
      </div>
      <div>
        <RowPost title={"Action"} url={action} />
      </div>
      <div>
        <RowPost title={"Documentary"} url={documentary} />
      </div>
    </div>
  );
}

export default App;
