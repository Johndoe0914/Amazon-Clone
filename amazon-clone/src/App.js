import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";
const promise = loadStripe(
  "pk_test_51HSUB6JIhe0Xur6uGjzmUCywX32cTAWOD5CZv32otft2CA5oDfM0vzGzDZvjsmoDovnBVO8ICZSuYmlnJcEhBvPb00j7AymDwX"
);

const App = () => {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //for cleanup

      unsubscribe();
    };
  }, []);

  console.log("user is =>>", user);
  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/checkout' exact component={Checkout} />
          <Elements stripe={promise}>
            <Route path='/payment' exact component={Payment} />
          </Elements>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
