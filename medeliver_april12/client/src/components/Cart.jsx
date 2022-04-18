import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Cart() {
  // const SomeComponent = () => {
  //   const navigate = useNavigate();

  //   const someEventHandler = () => {
  //     navigate("/map");
  //   };
  // };
  const history = useHistory();

  const routeChange = () => {
    let path = "/map";
    history.push(path);
  };

  return (
    <div className="cart">
      <Header />
      <h1 className="notice">
        <span>Your item will arrive at:</span>
        <span>23:35 tonight</span>
        <br></br>
        <span>
          <button onClick={routeChange}>Where is My Delivery?</button>
        </span>
      </h1>
      <Footer />
    </div>
  );
}

export default Cart;
