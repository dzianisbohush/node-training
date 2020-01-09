const os = require('os');

//platform
console.log(os.platform());

//CPUs
console.log(os.cpus());
console.log(os.arch());

//memory
console.log(os.totalmem());
console.log(os.freemem());

//root directory
console.log(os.homedir());
