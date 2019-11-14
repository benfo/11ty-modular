var crypto = require("crypto");
module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter(
    "checksum",
    (str, algorithm = "md5", encoding = "hex") => {
      return crypto
        .createHash(algorithm)
        .update(str, "utf8")
        .digest(encoding);
    }
  );

  eleventyConfig.addFilter("replaceregex", (value, pattern, replaceValue) => {
    var r = new RegExp(pattern);
    return value.replace(r, replaceValue);
  });

  /**
   * Collections
   */
  eleventyConfig.addCollection("components", function(collection) {
    return collection.getFilteredByTag("component").filter(function(item) {
      return item.fileSlug.startsWith("_");
    });
  });

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
