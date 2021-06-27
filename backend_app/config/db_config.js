const { Client } = require("pg");

const database = new Client({
  user: "postgres",
  host: "localhost",
  database: "vin",
  password: "balaji",
  port: 5432,
});

database.connect();

module.exports = database;