const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Pusher = require("pusher");

const app = express();
var corsOptions = {
  origin: "http://localhost:3000",
};
const queries = require("./queries.js");

// const db = require("./src/models");
// db.sequelize.sync();
// app.use(cors);
// app.use(express.json());

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

let pusher = new Pusher({
  appId: "1371299",
  key: "232250f2379f79382d57",
  secret: "d5aa4d12d3dc8946a90d",
  cluster: "us2",
  useTLS: true,
  // encrypted: true,
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world",
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.post("/pusher/auth", (req, res) => {
  let socketId = req.body.socket_id;
  let channel = req.body.channel_name;
  random_string = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(0, 5);
  let presenceData = {
    user_id: random_string,
    user_info: {
      username: "@" + random_string,
    },
  };
  let auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});

app.post("/update-location", (req, res) => {
  // trigger a new post event via pusher
  pusher.trigger("presence-channel", "location-update", {
    username: req.body.username,
    location: req.body.location,
  });
  res.json({ status: 200 });
});

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

app.get(`/products/:id`, queries.getDrugById);

app.post(`/products`, queries.createDrug);

app.put(`/products/:id`, queries.updateDrug);

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
