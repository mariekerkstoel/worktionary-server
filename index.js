const app = require("./src/index");
const config = require("./src/config");

app.listen(config.express.port, () => {
  console.log(`Listening on port: ${config.express.port}`)
})