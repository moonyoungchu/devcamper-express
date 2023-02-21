// @desc    Logs
const logger = (req, res, next) => {
  req.hello = "Hello moon";
  console.log(">>>middleware ran", req.method, req.protocol);
  next();
};

module.exports = logger;
