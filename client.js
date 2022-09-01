const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");
  conn.on("connect", () => {
    conn.write("Name: RUP")
    console.log("Successfully connected to game server");
  })
  conn.on("data", (data) => {
    console.log("you ded cuz you idled", data);
  })
  return conn;

}

module.exports = {
  connect };
