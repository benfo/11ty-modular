const _ = require("lodash")();
module.exports = function(object, ...sources) {
  return _.defaultsDeep(object, ...sources);
};
