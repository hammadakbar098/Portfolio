import "./App.css";
import Navbar from "./components/naavbar/Navbar";
import ProgressBar from "react-scroll-progress-bar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
import Home from "./components/Home";
import Services from "./components/Services/Services";
import NotFound from "./components/NotFound/NotFound";

function App() {
  // xoxo
  return (
    <div>
      <BrowserRouter>
        <ProgressBar bgcolor="#1db954" />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/resume" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
