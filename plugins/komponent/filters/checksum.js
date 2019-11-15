module.exports = (str, algorithm = "md5", encoding = "hex") => {
  return crypto
    .createHash(algorithm)
    .update(str, "utf8")
    .digest(encoding);
};
