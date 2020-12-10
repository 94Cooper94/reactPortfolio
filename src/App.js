import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Discover from "./components/pages/Discover";
import Search from "./components/pages/Search";

function App() {
  return (
    <HashRouter>
      <div>
        <NavTabs />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route path="/search" component={Search} />
      </div>
    </HashRouter>
  );
}

export default App;
