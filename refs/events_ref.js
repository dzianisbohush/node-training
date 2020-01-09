const EventEmmitter = require('events');

class Logger extends EventEmmitter {
  log(message) {
    this.emit('message', `${message} ${Date.now()}`)
  }
}

const logger = new Logger();

//on means listening
logger.on('message', data => {
  console.log(data);
});

logger.log('Hello');
logger.log('Hello');
