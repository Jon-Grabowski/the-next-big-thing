import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <h1>THE NEXT BIG THING, YEA!</h1>
      <Route path='/signup'>
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
