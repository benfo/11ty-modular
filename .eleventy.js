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
  eleventyConfig.addCollection("modules", function(collection) {
    return collection.getAll().filter(function(item) {
      return "modular" in item.data;
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
