const path = require("path");

const { app } = require(path.join(__dirname, 'app'));

const PORT = 3000;

app.listen(`${PORT}`, () => {
  console.log(`listening at port ${PORT}`);
});
