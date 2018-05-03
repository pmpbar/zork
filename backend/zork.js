const fs = require('fs');
const { exec, spawn } = require('child_process');
const log = require('./log');

class Zork  {
  constructor(user) {
    exec(`./newgamecheck ${user}`, { cwd: `./games` }, (err, stdout, stderr) => {
      // log.info(err, stdout, stderr);
      this.zork = spawn(`./zork`, { cwd: `./games/${user}`});
      this.zork.stdout.on('data', (data) => {
        this.output = String(data);
      });
    });
  };
  write(text) {
    this.zork.stdin.write(`${text}\n`);
    return this.output;
  }
  lastOutput() {
    return this.output;
  }
}
module.exports = Zork;
