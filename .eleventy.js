var crypto = require("crypto");
module.exports = function(eleventyConfig) {
  /**
   * Register the "komponent" plugin
   */
  eleventyConfig.addPlugin(require("./plugins/komponent"));

  /**
   * Static content
   */
  eleventyConfig.addPassthroughCopy({ "site/static": "/" });

  return {
    dir: {
      input: "site",
      output: "dist"
    }
  };
};
