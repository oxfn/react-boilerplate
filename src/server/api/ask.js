module.exports = (req, res) => {
  const value = Math.random() * 256;
  res.send(Math.ceil(value).toString());
  res.end();
};
