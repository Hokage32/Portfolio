import "./App.css";
import { Route, Routes, useLocation, Router } from "react-router-dom";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import Header from "./Components/Header";
import AnimatedRoutes from "./Components/AnimatedRoutes";

function App() {
  return (
    <div className="App">
      <Header />

      <AnimatedRoutes />
    </div>
  );
}

export default App;
