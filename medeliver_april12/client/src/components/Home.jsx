import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import deliveryMan from "../components/img/delivery-man.jpg";
import pharmacyStore from "../components/img/pharmacy-store.jpg";
import pill from "../components/img/pill.png";

const customStyle = {
  color: "",
};
const today = new Date();
const hour = today.getHours();
let greeting;

if (hour < 12) {
  greeting = "Good Morning";
  customStyle.color = "orange";
} else if (hour < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Evening";
  customStyle.color = "blue";
}

function Home() {
  return (
    <div>
      <Header />
      <h1
        className="greeting"
        style={customStyle}
        contentEditable="true"
        spellCheck="false"
      >
        {greeting}
      </h1>
      <div class="row">
        <img className="points" alt="" src={deliveryMan} />
        <img className="points" alt="" src={pharmacyStore} />
        <img className="points" alt="" src={pill} />
      </div>

      {/*  */}
      <h1 className="greeting">
        {" "}
        Welcome to Online Medication Delivery MED-BER!
      </h1>
      <Footer />
    </div>
  );
}

export default Home;
