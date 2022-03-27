import React from "react";
import drugs from "./DbDrugOld";
import Header from "./Header";
import Footer from "./Footer";

function Druglist(props) {
  return (
    <div className="druglist">
      <div className="top">
        {/* <p>{props.key}</p> */}
        <span className="name">{props.name}</span>
        {/* <img className="props-image" alt="" src={props.image}></img> */}
        <p className="price">${props.price}</p>
      </div>
      <div className="bottom">
        <p className="stock">{props.stock} in stock</p>
        {/* <p className="symptom">Symptom: {props.symptom}</p> */}
        {/* <p className="description">Description: {props.description}</p> */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

// function Entry(props) {
//   return (
//     <div className="term">
//       <dt>
//         <span className="emoji" role="img" aria-label="Tense Biceps">
//           {props.emoji}
//         </span>
//         <span>{props.name}</span>
//       </dt>
//       <dd>{props.description}</dd>
//     </div>
//   );
// }

export default Druglist;
