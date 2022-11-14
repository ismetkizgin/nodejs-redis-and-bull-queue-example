const Queue = require("bull");

class BullQueue {
  static createQueueClient({ host, port, password, queueName }) {
    return new Queue(queueName, {
      redis: {
        host,
        port,
        password,
      },
    });
  }
}

module.exports = BullQueue;
