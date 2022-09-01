const net = require("net");

// establishes a connection with the game server
const { connect } = require('./client.js');
const { setupInput } = require("./input.js");

console.log("Connecting ...");

setupInput(connect());
