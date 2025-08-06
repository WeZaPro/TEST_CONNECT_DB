const db = require("../models");
const TaxiDriver = db.taxiDriver;

exports.findAll = async (req, res) => {
  try {
    const drivers = await TaxiDriver.findAll();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
