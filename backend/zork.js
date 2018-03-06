const fs = require('fs');
const { spawn } = require('child_process');
const log = require('./log');

class Zork  {
  constructor() {
    this.zork = spawn('./zork');
    this.zork.stdout.on('data', (data) => {
      this.output = String(data);
    });
  };
  async write(text) {
    this.zork.stdin.write(`${text}\n`);
    return this.output;
  }
  lastOutput() {
    return this.output;
  }
}
module.exports = Zork;
