import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component/Navbar";
import { About, Contact, Home, Gallery, Academics } from "./component/pages";
import { Foother } from "./component/Foother";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Foother></Foother>
    </div>
  );
}

export default App;
