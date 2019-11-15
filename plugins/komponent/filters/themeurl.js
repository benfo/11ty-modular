const urljoin = require("url-join");
module.exports = value => {
  return urljoin("/themes/komponent", value);
};
