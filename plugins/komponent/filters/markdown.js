const markdown = require("markdown-it")({ html: true });
module.exports = function(value) {
  return markdown.render(value);
};
