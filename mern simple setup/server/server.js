const app = require("./app");
const port = 5000;
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log("server starts on port " + port);
});
