const net = require("net");

// establishes a connection with the game server
const connection = require('./client.js');

const connect = function () {
  const conn = net.createConnection({
    host: "10.0.0.129",
    port: "50541"
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", () => {
    console.log("you ded cuz you idled")
  })
  return conn;
};

console.log("Connecting ...");
connect();
