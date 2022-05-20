const apiKey = process.env.SPORTSDATA_KEY;
const axios = require("axios");
const config = require("./config");

const getPreGameOddsByDate = async (req, res) => {
  const { data } = await axios.get(
    config.generatePreGameOddsByDateURL(req.params.date, apiKey)
  );
  res.status(200).send(data);
};

module.exports = {
  getPreGameOddsByDate,
};
