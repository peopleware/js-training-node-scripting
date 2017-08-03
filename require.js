#!/usr/bin/env node

const fs = require("fs");
const dns = require("dns");


const output = fs.createWriteStream("./stdout.log");
const errorOutput = fs.createWriteStream("./stderr.log");

const logger = new console.constructor(output, errorOutput);
const count = 5;
logger.log("count: %d", count);



dns.lookup("www.peopleware.be", (err, address, family) => {
  console.log("address: %j family: IPv%s", address, family);
});

