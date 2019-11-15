module.exports = function(eleventyConfig) {
  /**
   * Filters
   */
  eleventyConfig.addFilter("checksum", require("./filters/checksum"));
  eleventyConfig.addFilter("markdown", require("./filters/markdown"));
  eleventyConfig.addFilter("defaultsDeep", require("./filters/defaultsDeep"));
  eleventyConfig.addFilter("toClass", require("./filters/toClass"));
  eleventyConfig.addFilter("replaceregex", require("./filters/replaceRegex"));
  eleventyConfig.addFilter("renderSass", require("./filters/renderSass"));
  eleventyConfig.addFilter("themeurl", require("./filters/themeurl"));

  /**
   * Collections
   */
  eleventyConfig.addCollection(
    "components",
    require("./collections/components")
  );

  /**
   * Static content
   */
  eleventyConfig.addPassthroughCopy({
    "site/_themes/komponent/static": "/themes/komponent/"
  });
};
