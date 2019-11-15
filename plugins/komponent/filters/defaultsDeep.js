const _ = require("lodash")();
module.exports = function(object, ...sources) {
  let result = JSON.stringify(_.defaultsDeep(object, ...sources));
  return JSON.parse(result);
};
