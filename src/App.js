import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <h1>test</h1>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
