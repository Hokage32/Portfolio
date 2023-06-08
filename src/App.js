import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import About from "./screens/About";
import Header from "./Components/Header";


function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
