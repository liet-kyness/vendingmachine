import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import MountainDew from "./MountainDew";
import Coke from "./Coke";
import Pepsi from "./Pepsi";
import VendingMachine from "./VendingMachine";
import NavBar from "./NavBar";

import "./App.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Route exact path="/">
          <VendingMachine />
        </Route>      
        <Route exact path="/coke">
          <Coke />
        </Route>
        <Route exact path="/pepsi">
          <Pepsi />
        </Route>
        <Route exact path="/mountaindew">
          <MountainDew />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;