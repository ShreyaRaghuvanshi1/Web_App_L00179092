module.exports = {
  injectFault: function (req, res, context, ee, next) {
    // Custom fault injection logic
    if (Math.random() < 0.1) { // 10% chance to simulate high latency
      setTimeout(() => next(), 5000); // Delay the response by 5 seconds
    } else {
      return next();
    }
  },

  validateHealthCheck: function (req, res, context, ee, next) {
    // Custom validation logic for health checks
    if (res.statusCode !== 200) {
      console.error(`Health check failed with status code: ${res.statusCode}`);
    }
    return next();
  },
};
