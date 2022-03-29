import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
  const [contact, setContact] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;

    setContact((preV) => {
      return {
        ...preV,
        [name]: value,
      };
    });
  }
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

  return (
    <div className="container">
      <Header />
      <h1>Hello Customer</h1>
      <p>{contact.email}</p>
      <form className="form-login" action="/products">
        <label for="emai">Enter your Email:</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          id="emai"
          value={contact.email}
          onChange={handleChange}
          required
        />
        <label for="passw">Enter your password:</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          id="passw"
          value={contact.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Log In</button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
