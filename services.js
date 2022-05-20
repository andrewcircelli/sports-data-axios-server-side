const apiKey = process.env.SPORTSDATA_KEY;
const axios = require("axios");
const config = require("./config");

const axiosGetPreGameOddsByDate = async (date, apiKey) => {
  const sportsDataResponse = await axios.get(
    config.generatePreGameOddsByDateURL(date, apiKey)
  );
  return sportsDataResponse.data;
};
const getPreGameOddsByDate = async (req, res) => {
  try {
    const data = await axiosGetPreGameOddsByDate(req.params.date, apiKey);
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

module.exports = {
  getPreGameOddsByDate,
};
