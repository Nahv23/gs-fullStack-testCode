const createError = require("http-errors");

const phones = require("../data/phones.json");

module.exports.getData = (req, res, next) => {
  if (phones && phones.length > 0) {
    res.status(200).json(phones);
  } else {
    throw createError(500, "Some problem has occurred");
  }
};
