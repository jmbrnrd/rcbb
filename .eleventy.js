const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const markdownIt = require("markdown-it");

module.exports = function (config) {

  const md = new markdownIt({
    html: true
  });

  config.addPairedShortcode("markdown", (content) => {
    return md.render(content);
  });

  config.addWatchTarget("./src/assets/styles/");
  config.addShortcode("year", () => `${new Date().getFullYear()}`);
  config.addWatchTarget('./src/assets/scripts/');
  config.addPassthroughCopy("./src/assets/fonts/");
  config.addPassthroughCopy("./src/assets/images/");
  config.addPlugin(eleventySass);
  return {
    templateFormats: ['md', 'njk'],
    dir: {
      input: "src",
      output: "public",
    },
  };
};
