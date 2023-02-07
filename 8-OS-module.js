// OS module
const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptine is seconds
console.log(`They system uptime is ${os.uptime} seconds.`);

const currenOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currenOS);
