import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import Demos from "./pages/Demos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <HashRouter basename="/" component={Home} >
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/Home" component={Home} />
          <Route path="/Demos" component={Demos} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter >
  );
}

export default App;
