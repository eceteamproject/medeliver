import React, { useEffect, useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [values, setItems] = useState([]);
  //   values = queries.GetDrugs();
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   useEffect(() => {
  //     send(queries.Druglist);
  //   });

  function handleChange(e) {
    const newN = e.target.name;
    setName(newN);
    const newP = e.target.price;
    setPrice(newP);
    const newS = e.target.stock;
    setStock(newS);
  }

  function handleSubmitX(event) {
    alert("A database was submitted :-)");
    event.preventDefault();
    setItems((preV) => {
      return [...preV, name];
    });
    setName("");
  }

  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.price.value);
    console.log(event.target.stock.value);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/products", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          price: price,
          stock: stock,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        {/* <label htmlFor="name">Drug Name</label> */}
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Drug Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        {/* <label htmlFor="price">Drug Price</label> */}
        <input
          type="text"
          className="form-control"
          id="price"
          placeholder="Drug Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div className="form-group">
        {/* <label htmlFor="descript">Drug Description</label> */}
        <input
          type="text"
          className="form-control"
          id="stock"
          placeholder="Drug Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;
