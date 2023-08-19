import React, { useContext, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./context/user";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UserProfile from "./components/UserProfile";
import SignUpLogIn from "./components/SignupLogIn";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Shop from './components/Shop'
import About from "./components/About";
import Reviews from "./components/Reviews";

function App() {
  const {user, setUser} = useContext(UserContext)

  const [productArray, setProductArray] = useState([])
  const history = useHistory()

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

    function login(loginInfo) {
      fetch('/login', {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(loginInfo),
      }).then((resp) => {
          if (resp.ok) {
          resp.json().then((user) => {
              setUser(user)
              history.goBack()
          });
          } else {
          console.log("didn't work!!");
          }
          });
  }

  return (
    <div className="App">
      <NavBar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/shop'>
        <Shop productArray={productArray}/>
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/reviews'>
        <Reviews />
      </Route>
      <Route path='/user'>
        <UserProfile />
      </Route>
      <Route path='/signup-login'>
      <SignUpLogIn login={login}/>
      </Route>
    </div>
  );
}

export default App;
