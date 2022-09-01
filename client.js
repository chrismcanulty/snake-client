const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.0.129",
    port: "50541"
  });
}

module.exports = connect
