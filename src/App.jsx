import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";

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
        <RowPost />
      </div>
    </div>
  );
}

export default App;
