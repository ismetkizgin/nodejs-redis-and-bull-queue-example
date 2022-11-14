const router = require("express")();
const config = require("../utils/config");
const BullQueue = require("../utils/bullQueue");
const bullQueueClient = BullQueue.createQueueClient({
  ...config.redis,
  queueName: "send-forgot-password-email",
});

router.post("/forgot-password", async (req, res) => {
  const response = await bullQueueClient.add(req.body);
  res.json(response);
});

module.exports = router;
