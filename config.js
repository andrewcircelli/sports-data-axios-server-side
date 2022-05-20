const generatePreGameOddsByDateURL = (date, apiKey) => {
  return `https://api.sportsdata.io/v3/mlb/odds/json/GameOddsByDate/${date}?key=${apiKey}`;
};

module.exports = {
  generatePreGameOddsByDateURL,
};
