module.exports = function(eleventyConfig) {
  const theme = "komponent";
  /**
   * Register the "komponent" plugin
   */
  eleventyConfig.addPlugin(require(`./plugins/${theme}`));

  return {
    dir: {
      input: "site",
      output: "dist",
      includes: `_themes/${theme}`,
      data: `_data/${theme}`
    }
  };
};
