import React, { Component } from "react";
import GoogleMap from "google-map-react";
import opaque from "../components/img/opaque.png";

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

class Map extends Component {
  render() {
    return (
      <div>
        <GoogleMap
          style={mapStyles}
          bootstrapURLKeys={{ key: "AIzaSyC7cgf4InNcEMEKmR_-B18AQT3X0bc_XWk" }}
          center={{ lat: 35.68026, lng: 139.76744 }}
          zoom={14}
        >
          <Marker
            title={"Delivery Person"}
            lat={35.68062}
            lng={139.76762}
          ></Marker>
        </GoogleMap>
      </div>
    );
  }
}

export default Map;
