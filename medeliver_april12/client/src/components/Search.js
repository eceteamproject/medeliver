import React, { useState } from "react";
import Products from "./Products";

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [];
// function callBackendAPI = async () => {
//   const res = fetch("/products")
//     .then((res) => res.json())
//     .catch((err) => console.log(err))
//     .then((res) => {
//       this.setState({
//         drugs: res.drugs,
//       });
//     });
//   USERS = JSON.stringify(res.drugs);
// };

const DATA = [
  {
    id: 1,
    name: "Tylenol",
    // photo: { drugtyl },
    // "https://www.google.com/imgres?imgurl=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71EJz-8nn8L._AC_SX425_.jpg&imgrefurl=https%3A%2F%2Fwww.amazon.ca%2FTylenol-Extra-Strength-500mg-Caplets%2Fdp%2FB003M5CEYA&tbnid=r6t9nFuK9XB9zM&vet=12ahUKEwjnpaPUlfz1AhWYrXIEHXSmAcQQMygCegUIARDcAQ..i&docid=hA4UjaWhICUUBM&w=425&h=717&q=Tylenol&ved=2ahUKEwjnpaPUlfz1AhWYrXIEHXSmAcQQMygCegUIARDcAQ",
    price: 10,
    stock: 25,
    symptom: "cough and cold",
    description:
      "Each caplet contains 500 mg of acetaminophen for pain relief and 30 mg of pseudoephedrine hydrochloride for nasal congestion relief. The nighttime caplets add 2 mg of chlorpheniramine maleate for relief of runny nose and sneezing and lets you rest. ",
  },

  {
    id: 2,
    name: "Diarrhea Relief",
    // photo: { drugdia },
    // "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.jeancoutu.com%2Fcatalog-images%2F093537%2Fen%2Fviewer%2F0%2Fpersonnelle-diarrhea-relief-6-units.png&imgrefurl=https%3A%2F%2Fwww.jeancoutu.com%2Fen%2Fshopping%2Fproduct%2Fdiarrhea-relief-6-units%2F093537%2F&tbnid=9k6CD7Pkn1NZ9M&vet=12ahUKEwj5gsqmlfz1AhV0g3IEHZQ4CGYQMygAegQIARAx..i&docid=cB3Ci0kke3GBwM&w=362&h=330&q=diarrhea%20relief%20jean%20coutu&ved=2ahUKEwj5gsqmlfz1AhV0g3IEHZQ4CGYQMygAegQIARAx",
    price: 7,
    stock: 10,
    symptom: "Anti-diarrheal",
    description:
      "Rapid relief of diarrhea, often with just one dose. Product monograph available to health professionals on request. Store between 15°C and 30°C.",
  },
  {
    id: 3,
    name: "Systane Ultra Lubricant Eye Drops",
    price: 5,
    stock: 35,
    symptom: "Eye, ears and nose",
    description:
      "Immediate comfort and extended protection for dry eye due to insufficient quantity or quality of natural tears",
  },
  {
    id: 4,
    name: "Gaviscon Extra Strength Soothing Antacid",
    price: 18,
    stock: 5,
    symptom: "Stomach and antacid",
    description:
      "For day and nighttime relief of heartburn, acid reflux and GERD (gastro esophageal reflux disease) symptoms",
  },
  {
    id: 5,
    name: "Glucerna",
    // "https://www.google.com.hk/imgres?imgurl=https%3A%2F%2Fi5.walmartimages.ca%2Fimages%2FEnlarge%2F557%2F718%2F6000199557718.jpg&imgrefurl=https%3A%2F%2Fwww.walmart.ca%2Fen%2Fip%2Fglucerna-nutritional-drink-meal-replacement-shake-complete-balanced-nutrition-for-people-with-diabetes-strawberry-6-x-237-ml%2F6000074350269&tbnid=uGAK2C7LSMTVtM&vet=12ahUKEwji1dfI7__1AhXyrHIEHadDC04QMygHegUIARCdAg..i&docid=BWGJAaFBDpEisM&w=750&h=750&q=GLUCERNA&hl=zh-CN&ved=2ahUKEwji1dfI7__1AhXyrHIEHadDC04QMygHegUIARCdAg",
    price: 13,
    stock: 8,
    symptom: "diabete",
    description:
      "Glucerna nutritional drink is a delicious ready-to-use product that you can enjoy anytime, anywhere. A well-balanced nutritional drink that complies with the 2013 nutritional guidelines of the Canadian Diabetes Association.",
  },
];

function Search() {
  // the value of the search field
  const [name, setName] = useState("");

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Search Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-name">{user.name}</span>
              <span className="user-price">${user.price} </span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default Search;
