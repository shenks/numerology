import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <h1>Hello, React!</h1>
        </header>
      </div>
    </Router>
  );
}

export default App;
