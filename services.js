const apiKey = process.env.SPORTSDATA_KEY;
const axios = require("axios");
const config = require("./config");

const getPreGameOddsByDate = async (req, res) => {
  try {
    const sportsDataResponse = await axios.get(
      config.generatePreGameOddsByDateURL(req.params.date, apiKey)
    );
    res.status(200).send(sportsDataResponse.data);
  } catch (err) {
    res.status(400).send({ error: err });
  }
};

module.exports = {
  getPreGameOddsByDate,
};
