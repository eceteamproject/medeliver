import React, { Component } from "react";
import { useEffect, useState } from "react";
import GoogleMap from "google-map-react";
import opaque from "../components/img/opaque.png";
import Timer from "./Countdown/Timer";

const mapStyles = {
  width: "100%",
  height: "100%",
};

const markerStyle = {
  height: "50px",
  width: "50px",
  marginTop: "-50px",
};

const imgStyle = {
  height: "100%",
};

const Marker = ({ title }) => (
  <div style={markerStyle}>
    <img
      style={imgStyle}
      src={opaque}
      // "https://i.pinimg.com/474x/c0/66/e2/c066e24117930ab126705704ca134b39.jpg"
      // "https://thumbs.dreamstime.com/z/bike-courier-delivers-corporate-gifts-large-bag-transportation-cities-central-areas-business-bicycle-lifestyle-young-cyclist-138498814.jpg"
      //   src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png"
      alt={title}
    />
    <h3>{title}</h3>
  </div>
);

var torchys = [
  { latlng: [30.370375, -97.756138] },
  { latlng: [30.323118, -97.739144] },
  { latlng: [30.302816, -97.69949] },
  { latlng: [30.293479, -97.742405] },
  { latlng: [30.250337, -97.754593] },
  { latlng: [30.236689, -97.76273] },
];

var center = [
  { lat: 5.68026, lng: 19.76744 },
  { lat: 35.68027, lng: 139.76745 },
  { lat: 35.68028, lng: 139.76746 },
  { lat: 35.68029, lng: 139.76747 },
  { lat: 35.6803, lng: 139.76748 },
  { lat: 35.68031, lng: 139.76749 },
];

var longlats = [
  [35.68026, 139.76744],
  [35.68079, 139.76797],
  [35.68122, 139.76812],
  [35.68188, 139.76888],
  [35.68299, 139.76922],
];
var item = {};
var lat,
  lng = 0;
// item.id = Marker.getId;
// item.Coordinate = {};

setInterval(function (lat, lng) {
  var count = 0;
  // item.Coordinate.Longitude = longlats[count][0];
  // item.Coordinate.Latitude = longlats[count][1];
  lat = longlats[count][0];
  lng = longlats[count][1];
  count++;
  // updateCoordinate(item);
}, 5000);

class Map extends Component {
  render() {
    return (
      <div>
        <GoogleMap
          style={mapStyles}
          bootstrapURLKeys={{ key: "AIzaSyC7cgf4InNcEMEKmR_-B18AQT3X0bc_XWk" }}
          // center={{ lat: 35.68026, lng: 139.76744 }}
          center={{ lat: 35.68026, lng: 139.76744 }}
          zoom={15}
        >
          <Marker
            title={"Delivery Person"}
            // this works well
            lat={longlats[0][0]}
            lng={longlats[0][1]}
            // lat={setInterval(lat)}
            // lng={setInterval(lng)}
            // lat={center.lat}
            // lng={center.lng}
            // coordinate={{
            //   latitude: center.lat,
            //   longitude: center.lng,
            // }}
            // position={{
            //   lat: center.lat,
            //   lng: center.lng,
            // }}
          ></Marker>
        </GoogleMap>
        <Timer></Timer>
      </div>
    );
  }
}

export default Map;
