import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById("root"));

let map;
const google = window.google;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

serviceWorker.unregister();
