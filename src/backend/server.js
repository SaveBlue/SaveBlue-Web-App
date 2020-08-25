const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const server = express();
const port = process.env.PORT || 3000;
const url = process.env.URL || "http://localhost";

//---------------------------------------------
// cors settings
var corsOptions = {
    origin: url +":"+ 8080
};
server.use(cors(corsOptions));

// parse requests of content-type - application/json
server.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: true }));
//---------------------------------------------

/*require("./routes/users.routes")(server);
require("./routes/accounts.routes")(server);*/

const path = require('path')
// Server static files from the Vue frontend app
server.use(express.static(path.join(__dirname, '/dist')));

/*server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});*/


server.get("/", (req, res) => {
    res.json({ message: "Test server running!" });
});

/**
 * Start server
 */
server.listen(port, () => {
    console.log(`Server running on port ${port}!`);
});

module.exports = server;