module.exports = function(eleventyConfig) {
  // README.mdをサイト成果物にコピー
  eleventyConfig.addPassthroughCopy("README.md");
  
  // CSSファイルをコピー
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
