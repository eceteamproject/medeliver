import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="navb">
        <Link to="/products" className="navbar-item">
          Products
        </Link>
      </div>
      <div className="navb">
        <Link to="/map" className="navbar-item">
          Map
        </Link>
      </div>
      <div className="navb">
        <Link to="/login" className="navbar-item">
          Login
        </Link>
      </div>
      <div className="navb">
        <Link to="/cart" className="navbar-item">
          Cart
        </Link>
      </div>
      <div className="navb">
        <Link to="/" className="navbar-item">
          Home
        </Link>
      </div>
      <div className="navb">
        <Link to="/registration" className="navbar-item">
          Registration
        </Link>
      </div>
      <div className="navb">
        <Link to="/aboutus" className="navbar-item">
          About Us
        </Link>
      </div>
    </nav>
  );
}

//  <nav
//   className="navbar container"
//   role="navigation"
//   aria-label="main navigation"
// >
//   <div className="navbar-brand">
//     {/* <b className="navbar-item is-size-4 ">E-Commerce</b> */}

//     <a
//       href="/"
//       role="button"
//       className="navbar-burger burger"
//       aria-label="menu"
//       aria-expanded="false"
//       data-target="navbarBasicExample"
//       onClick={(e) => {
//         e.preventDefault();
//         this.setState({ showMenu: !this.state.showMenu });
//       }}
//     >
//       <span aria-hidden="true"></span>
//       <span aria-hidden="true"></span>
//       <span aria-hidden="true"></span>
//     </a>
//   </div>
//   <div
//     className={`navbar-menu ${this.state.showMenu ? "is-active" : ""}`}
//   >
//     <Link to="/druglist" className="navbar-item">
//       Druglist
//     </Link>
//     {this.state.user && this.state.user.accessLevel < 1 && (
//       <Link to="/add-product" className="navbar-item">
//         Add Product
//       </Link>
//     )}
//     <Link to="/cart" className="navbar-item">
//       Cart
//       <span className="tag is-primary" style={{ marginLeft: "5px" }}>
//         {Object.keys(this.state.cart).length}
//       </span>
//     </Link>
//     {!this.state.user ? (
//       <Link to="/login" className="navbar-item">
//         Login
//       </Link>
//     ) : (
//       <a href="/" className="navbar-item" onClick={this.logout}>
//         Logout
//       </a>
//     )}
//   </div>
//  </nav>

export default Navbar;
