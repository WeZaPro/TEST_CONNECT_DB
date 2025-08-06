const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
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
