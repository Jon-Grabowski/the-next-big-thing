import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./context/user";
import UserPage from "./components/UserPage";

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
      <Route path='/user'>
        <UserPage />
      </Route>
    </div>
  );
}

export default App;
