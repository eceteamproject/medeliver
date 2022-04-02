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
    <div>
      <Header />
      <h1>
        <span>No item yet</span>
        <button onClick={routeChange}>Delivery on the Road</button>
      </h1>
      <Footer />
    </div>
  );
}

export default Cart;
