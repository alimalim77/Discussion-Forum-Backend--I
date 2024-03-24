const verifyAuth = (req, res, next) => {
  const headers = req.headers;
  headers["x-api-key"] === process.env.X_API_KEY
    ? res.status(200).send({})
    : res.status(403).send({ message: "Unauthorised Access" });
  next();
};

module.exports = { verifyAuth };
