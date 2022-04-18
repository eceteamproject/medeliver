import React, { useState, Component } from "react";
import Druglist from "./Druglist";
import Container from "../dialog/Container";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const triggerText = "Add Database";
const onSubmit = (event) => {
  event.preventDefault(event);
  console.log(Container.name);
  console.log(event.target.name.value);
  console.log(event.target.price.value);
  console.log(event.target.stock.value);
  console.log(event.target.symptom.value);
};
// const [searchInput, setSearchInput] = useState("");
const [searchInput, setSearchInput] = "";

const SearchBar = ({ searchInput, setSearchInput }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={searchInput}
      placeholder={"search keyword"}
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
};

//
// const data = await fetch("/products.json").json();
//   {
//     key: createEntry.drug.id,
//   },
// ];

// const handleChangeS = (e) => {
//   e.preventDefault();
//   setSearchInput(e.target.value);
// };

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
      filtered: [],
    };
  }

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => res)
      .catch((err) => console.log(err));
    this.setState({
      filtered: this.state.drugs,
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.drugs,
    });
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
    // data = res.json();
    // console.log(data);
    // // const dataList = [res.json().stringify()];
    // if (searchInput.length > 0) {
    //   data.filter((data) => {
    //     return data.name.match(searchInput);
    //   });
    // }
  };

  render() {
    return (
      <div className="products">
        <Header />
        <h1>
          {/* <SearchBar></SearchBar> */}
          <Container
            className="pop"
            triggerText={triggerText}
            onSubmit={onSubmit}
          />
          {/* <Search></Search> */}
          <div>
            <span>List of Drugs</span>
          </div>
        </h1>
        <dl className="drugProducts">{this.state.drugs.map(createEntry)}</dl>
        <Footer />
      </div>
    );
  }
}

export default Products;
