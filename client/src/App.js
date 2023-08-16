import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { UserContext } from "./context/user";

function App() {
  const {user} = useContext(UserContext)

  if (user) {
    console.log(user.first_name)
  } else {
    console.log('logged out')
  }
  return (
    <div className="App">
      <h1>THE NEXT BIG THING, YEA!</h1>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </div>
  );
}

export default App;
