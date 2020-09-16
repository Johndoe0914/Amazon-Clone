import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import "./App.css";

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
          <Route path='/login' exact component={Login} />
          <Route path='/checkout' exact component={Checkout} />

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
