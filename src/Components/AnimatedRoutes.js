import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Home from "../screens/Home";
import Projects from "../screens/Projects";
import Contact from "../screens/Contact";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{
                opacity: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              animate={{
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              exit={{
                opacity: 0,
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{
                opacity: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              animate={{
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              exit={{
                opacity: 0,
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              transition={{ duration: 0.75 }}
              initial={{
                opacity: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              animate={{
                opacity: 1,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              exit={{
                opacity: 0,
                clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
              }}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
