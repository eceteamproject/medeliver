import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [symptom, setSymptom] = useState("");

  const [values, setValues] = useState([]);

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
    setValues((preV) => {
      return [...preV, values];
    });
    setName("");
  }

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          price: price,
          stock: stock,
          symptom: symptom,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setPrice("");
        setStock("User created successfully");
        setSymptom("");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <div className="form-group">
      {/* <label htmlFor="name">Drug Name</label> */}
      <form onSubmit={handleSubmit} method="POST">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Drug Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          id="price"
          placeholder="Drug Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          className="form-control"
          id="stock"
          placeholder="Drug Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          id="symptom"
          placeholder="Drug Symptom"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
        />
        <button className="form-control btn btn-primary" onClick={handleClose}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
