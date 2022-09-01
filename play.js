const net = require("net");

// establishes a connection with the game server
const { connect } = require('./client.js');
const { setupInput } = require("./input.js");

// setup interface to handle user input from stdin

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

// const handleUserInput = function () {
//   if (key === '\u0003') {
//     process.exit();
//   }
// };

const connection = function () {
  connect;

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  })
  conn.on("connect", () => {
    conn.write("Name: RUP");
    // conn.write("Move: up");
    // setInterval(() => {conn.write("Move: up")}, 1500);
  });
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  })
  return conn;
};

console.log("Connecting ...");
connect();

setupInput();
