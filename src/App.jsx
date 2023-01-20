import "./App.css";
import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <div style={"height :fit-content"}> */}
      <Banner />
      {/* </div> */}
      <RowPost />
    </div>
  );
}

export default App;
