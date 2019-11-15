const sass = require("sass");
module.exports = data => {
  return sass.renderSync({ data, outputStyle: "compressed" }).css;
};
