const express = require("express");

const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};
const queries = require("./queries.js");

// const db = require("./src/models");
// db.sequelize.sync();
// app.use(cors);
// app.use(express.json());

// const allowedOrigins = ["http://localhost:3001"];
// const options = {
//   origin: allowedOrigins,
// };
// const request = require("request");
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(logger());
// simple route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to online medication delivery application.",
  });
});
app.get("/products", (req, res) => {
  queries
    .getDrugs()
    .then((r) => {
      res.json({ drugs: r });
    })
    .catch((e) => {
      res.json({ message: e.toString() });
    });
});

// app.get("/products/:id", (req, res) => {
//   queries
//     .getDrugById()
//     .then((r) => {
//       res.json({ drugs: r });
//     })
//     .catch((e) => {
//       res.json({ message: e.toString() });
//     });
// });

// app.post("/products", (req, res) => {
//   queries
//     .createDrug()
//     .then((r) => {
//       res.json({ drugs: r });
//     })
//     .catch((e) => {
//       res.json({ message: e.toString() });
//     });
// });

// app.put("/products/:id", (req, res) => {
//   queries
//     .updateDrug()
//     .then((r) => {
//       res.json({ drugs: r });
//     })
//     .catch((e) => {
//       res.json({ message: e.toString() });
//     });
// });

app.get(`/products/:id`, queries.getDrugById);

app.post(`/products`, queries.createDrug);

app.put(`/products/:id`, queries.updateDrug);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});