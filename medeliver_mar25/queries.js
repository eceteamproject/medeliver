const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "database-1.cee5kxyevhmq.ca-central-1.rds.amazonaws.com",
  database: "db_medber",
  password: "medber63111",
  port: 5432,
});

const getDrugs = () => {
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM drugs ORDER BY id ASC", (error, res) => {
      if (error) {
        reject(error);
      } else {
        resolve(res.rows);
      }
    });
  });
};

const getDrugById = () => {
  return new Promise(function (request, response) {
    const id = parseInt(request.params.id);

    pool.query("SELECT * FROM drugs WHERE id = $1", [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  });
};

const createDrug = () => {
  return new Promise(function (request, response) {
    const { name, price, stock } = request.body;

    pool.query(
      "INSERT INTO drugs (name, price, stock) VALUES ($1, $2, $3)",
      [name, price, stock],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(`Drug added with ID: ${result.insertId}`);
      }
    );
  });
};

const updateDrug = () => {
  return new Promise(function (request, response) {
    const id = parseInt(request.params.id);
    const { name, price, stock } = request.body;

    pool.query(
      "UPDATE drugs SET name = $1, price = $2, stock = $3 WHERE id = $4",
      [name, price, stock, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).send(`Drug modified with ID: ${id}`);
      }
    );
  });
};
// crashed
// const getDrugs = (request, response) => {
//   pool.query("SELECT * FROM drugs ORDER BY id ASC", (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

module.exports = {
  getDrugs,
  getDrugById,
  createDrug,
  updateDrug,
};
