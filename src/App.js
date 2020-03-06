import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MacrosList from "./components/MacrosList";
import CreateMacro from "./components/CreateMacro";

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="ui container">
        <Route path="/" exact component={MacrosList} />
        <Route path="/create" component={CreateMacro} />
      </div>
    </Router>
  );
}

export default App;
