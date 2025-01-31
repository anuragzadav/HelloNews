import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  let pageSize = 9;
  let apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setprogress] = useState(0);
  // Load theme from localStorage or default to light mode
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save theme in localStorage
  };

  // Apply theme to body when it changes
  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "#DAE2DF" : "#3C3744";
    document.body.style.color = theme === "light" ? "black" : "white";
  }, [theme]);

  // setprogress(progress);

  return (
    <>
      <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <LoadingBar
          color="red"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setprogress}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
                theme={theme}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setprogress}
                key="health"
                pageSize={pageSize}
                country="us"
                category="health"
                theme={theme}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setprogress}
                key="science"
                pageSize={pageSize}
                country="us"
                category="science"
                theme={theme}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setprogress}
                key="sports"
                pageSize={pageSize}
                country="us"
                category="sports"
                theme={theme}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setprogress}
                key="technology"
                pageSize={pageSize}
                country="us"
                category="technology"
                theme={theme}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
