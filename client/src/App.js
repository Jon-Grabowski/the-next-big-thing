import React, { useContext, useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { UserContext } from "./context/user";
import UserProfile from "./components/UserProfile";
import SignUpLogIn from "./components/SignupLogIn";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Shop from './components/Shop'
import About from "./components/About";
import Reviews from "./components/Reviews";

function App() {
  const { setUser} = useContext(UserContext)

  const [productArray, setProductArray] = useState([])

    useEffect(()=>{
      getProducts()
      fetchUser()
    }, [])

    function fetchUser() {
      fetch('/authorized').then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => setUser(user));
        }
      });
    };

    function getProducts() {
      fetch('/products')
      .then(r=>r.json())
      .then(products => setProductArray(products)) 
    }


  return (
    <div className="App">
      <NavBar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/shop'>
        <Shop productArray={productArray} fetchUser={fetchUser}/>
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/reviews'>
        <Reviews />
      </Route>
      <Route path='/user'>
        <UserProfile fetchUser={fetchUser}/>
      </Route>
      <Route path='/signup-login'>
        <SignUpLogIn />
      </Route>
    </div>
  );
}

export default App;
