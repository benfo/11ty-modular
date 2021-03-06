const _ = require("lodash");
module.exports = (cssClass, cssClasses) => {
  if (_.isString(cssClasses)) {
    return _.join([cssClass, cssClasses], " ");
  }

  if (_.isObject(cssClasses) && cssClasses.hasOwnProperty(cssClass)) {
    return _.join([cssClass, cssClasses[cssClass]], " ");
  }

  return cssClass;
};
