const Sequelize = require("sequelize");

// const sequelize = new Sequelize(
//   process.env.DB_NAME || "happy_Demo",
//   process.env.DB_USER || "happy_Demo",
//   process.env.DB_PASSWORD || "Taweesak5050",
//   {
//     host: "localhost",
//     dialect: "mysql",
//   }
// );

// const sequelize = new Sequelize("happy_Demo", "happy_Demo", "Taweesak5050", {
//   host: "localhost",
//   dialect: "mysql",
// });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  "happy_Demo",
  "Taweesak5050",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.taxiDriver = require("./taxiDriver.model.js")(sequelize, Sequelize);

module.exports = db;
