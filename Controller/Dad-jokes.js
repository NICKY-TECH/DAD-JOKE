const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const axios = require("axios");

const options = {
  method: "GET",
  url: "https://dad-jokes.p.rapidapi.com/random/joke",
  headers: {
    "X-RapidAPI-Key": `${process.env.KEY}`,
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
};

const getDadJokes = async (req, res) => {
  try {
    let response = await axios.request(options);
    let joke = response.data;
    res.status(200).json({
      joke
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getDadJokes,
};
