const express = require("express");
const engine = require("ejs-mate");
const path = require("path");

//Initializations
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

//settings
app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Routes
app.use(require("./routes/"));

//Sockets
require("./sockets")(io);

//static files
app.use(express.static(path.join(__dirname, "public")));

//Starting the server
server.listen(3000, () => {
  console.log("Server on port 3000");
});
