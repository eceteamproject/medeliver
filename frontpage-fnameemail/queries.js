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

module.exports = {
  getDrugs,
};
