const config = require("../utils/config");
const BullQueue = require("../utils/bullQueue");
const bullQueueClient = BullQueue.createQueueClient({
  ...config.redis,
  queueName: "send-forgot-password-email",
});

module.exports = () => {
  bullQueueClient.process((job, jobDone) => {
    console.log(`Hello ${job.data.emailAddress}`);
    jobDone();
  });
};
