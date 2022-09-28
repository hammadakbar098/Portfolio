import "./App.css";
import Navbar from "./components/naavbar/Navbar";
import Header from "./components/Header/Header";
import Details from "./components/section2/Details";
import Resume from "./components/Resume/Resume";
import ProgressBar from "react-scroll-progress-bar";
// import LoadingBar from "react-top-loading-bar";

function App() {
  return (
    <div>
      <ProgressBar bgcolor="#1db954" />
      {/* <LoadingBar color="#1db954"  /> */}
      <Navbar />
      <Header />
      <Details />
      <Resume />
    </div>
  );
}

export default App;
