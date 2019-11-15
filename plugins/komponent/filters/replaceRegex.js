module.exports = (value, pattern, replaceValue) => {
  var r = new RegExp(pattern);
  return value.replace(r, replaceValue);
};
