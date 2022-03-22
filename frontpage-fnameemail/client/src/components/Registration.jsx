import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    hAdress: "",
    pNumber: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;

    setContact((preV) => {
      return {
        ...preV,
        [name]: value,
      };
    });

    // setContact((pre) => {
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: pre.lName,
    //       email: pre.email
    //     };
    //   } else if (name === "lName") {
    //     return {
    //       fName: pre.fName,
    //       lName: value,
    //       email: pre.email
    //     };
    //   } else if (name === "email") {
    //     return {
    //       fName: pre.fName,
    //       lName: pre.lName,
    //       email: value
    //     };
    //   }
    // });
  }

  return (
    <div className="container">
      <Header />
      <h1>Registration</h1>
      <form className="form-login">
        <input
          name="fName"
          type="text"
          placeholder="First Name"
          value={contact.fName}
          onChange={handleChange}
          minLength="1"
          maxLength="20"
          required
        />
        <input
          name="lName"
          type="text"
          placeholder="Last Name"
          value={contact.lName}
          onChange={handleChange}
          minLength="1"
          maxLength="20"
          required
        />
        <p>Select an age:</p>
        <input type="radio" name="age" id="young" value="young" />
        <label for="age">18-30</label>
        <input type="radio" name="age" id="middle" value="middle" />
        <label for="age">31-60</label>
        <input type="radio" name="age" id="elderly" value="elderly" />
        <label for="age">Above 61</label>

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={contact.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={contact.password}
          onChange={handleChange}
          required
        />
        <input
          name="hAdress"
          type="text"
          placeholder="Home Address"
          value={contact.hAdress}
          onChange={handleChange}
          required
        />
        <input
          name="pNumber"
          type="tel"
          placeholder="Phone Number"
          value={contact.pNumber}
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
