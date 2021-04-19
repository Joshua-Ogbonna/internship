import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Wallet from "./components/Wallet";

import { Router } from "@reach/router";
import Home from "./components/Home";
import Activity from "./components/Activity";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Home path="/" />
        <Wallet path="/wallet" />
        <Activity path="/activity" />
      </Router>

      <Navigation />
    </div>
  );
}

export default App;
