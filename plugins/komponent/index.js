module.exports = function(eleventyConfig) {
  /**
   * Filters
   */
  eleventyConfig.addFilter("checksum", require("./filters/checksum"));
  eleventyConfig.addFilter("markdown", require("./filters/markdown"));
  eleventyConfig.addFilter("defaultsDeep", require("./filters/defaultsDeep"));
  eleventyConfig.addFilter("toClass", require("./filters/toClass"));
  eleventyConfig.addFilter("replaceregex", require("./filters/replaceRegex"));

  /**
   * Collections
   */
  eleventyConfig.addCollection("components", require("./collections/components");
};
