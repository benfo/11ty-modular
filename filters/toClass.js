const _ = require("lodash");
module.exports = function(cssClass, cssClasses) {
  if (_.isString(cssClasses)) {
    return _.join([cssClass, cssClasses], " ");
  }

  cssClasses = JSON.parse(JSON.stringify(cssClasses));
  if (_.isObject(cssClasses) && cssClasses.hasOwnProperty(cssClass)) {
    return _.join([cssClass, cssClasses[cssClass]], " ");
  }

  return cssClass;
};
