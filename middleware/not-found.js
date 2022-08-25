const notFound = (req, res) => res.status(200).send("Route does not exist");

module.exports = notFound;