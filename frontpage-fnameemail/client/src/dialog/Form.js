import React, { useEffect, useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  const [values, setItems] = useState([]);
  //   values = queries.GetDrugs();
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   useEffect(() => {
  //     send(queries.Druglist);
  //   });

  function handleChange(e) {
    const newV = e.target.value;
    setInput(newV);
  }

  function handleSubmit(event) {
    alert("A database was submitted :-)");
    event.preventDefault();
    setItems((preV) => {
      return [...preV, input];
    });
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        {/* <label htmlFor="name">Drug Name</label> */}
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Drug Name"
          value={input.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        {/* <label htmlFor="price">Drug Price</label> */}
        <input
          type="text"
          className="form-control"
          id="price"
          placeholder="Drug Price"
          value={input.price}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        {/* <label htmlFor="descript">Drug Description</label> */}
        <input
          type="text"
          className="form-control"
          id="descript"
          placeholder="Drug Stock"
          value={input.price}
          onChange={handleChange}
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
