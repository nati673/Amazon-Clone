import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/LoginPage/Login";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import React, { useEffect } from "react";
import { auth } from "./Firebase";
import Payment from "./Components/Back-End/Payment/Payment";
import {loadStripe} from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Back-End/Orders/Orders";

const promise = loadStripe(
  "pk_test_51NcYzCIhpMjuSlNb0YqzDmq8Nihih9huUgP36OdJiZOlx8ikK1U9Z0HpT7pwj6GPOfVQu6oypuKpH6EQySYNl8Zg00yDE1LxaK"
);


function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
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
  }, []);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Home />< Footer/>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/orders"
            element={
              <>
                {" "}
                <Header /> <Orders />
              </>
            }
          />

          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
