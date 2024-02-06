import "./App.css";
import { Route, Routes, useLocation, Router } from "react-router-dom";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import Header from "./Components/Header";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <AnimatedRoutes />
      <br />

      <Footer />
    </div>
  );
}

export default App;
