import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer.jsx";
import Birthday from "./components/birthday/Birthday.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Birthday />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
