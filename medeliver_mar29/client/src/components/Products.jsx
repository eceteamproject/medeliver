import React, { Component } from "react";
import { useState } from "react";
import Druglist from "./Druglist";
import Container from "../dialog/Container";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const triggerText = "Add Database";
const onSubmit = (event) => {
  event.preventDefault(event);
  console.log(Container.name);
  console.log(event.target.name.value);
  console.log(event.target.price.value);
  console.log(event.target.stock.value);
  console.log(event.target.symptom.value);
};

function createEntry(drug) {
  return (
    <Druglist
      key={drug.id}
      name={drug.name}
      // image={drug.image}
      price={drug.price}
      stock={drug.stock}
      symptom={drug.symptom}
      // description={drug.description}
    />
  );
}

class Products extends Component {
  constructor(props) {
    super();
    this.state = {
      drugs: [],
    };
  }

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => res)
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const res = fetch("/products")
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then((res) => {
        this.setState({
          drugs: res.drugs,
        });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <h1>
          <div>
            <span>List of Drugs</span>
          </div>
        </h1>
        <Container
          className="pop"
          triggerText={triggerText}
          onSubmit={onSubmit}
        />
        <dl className="drugProducts">{this.state.drugs.map(createEntry)}</dl>
        <Footer />
      </div>
    );
  }
}

export default Products;
