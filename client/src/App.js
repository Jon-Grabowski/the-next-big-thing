import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./context/user";
import UserProfile from "./components/UserProfile";
import SignUpLogIn from "./components/SignupLogIn";
import Home from "./components/Home";

function App() {
  const {user} = useContext(UserContext)

  if (user) {
    console.log(user.first_name)
  } else {
    console.log('logged out')
  }
  return (
    <div className="App">
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/user'>
        <UserProfile />
      </Route>
      <Route path='/signup-login'>
        <SignUpLogIn />
      </Route>
    </div>
  );
}

export default App;
