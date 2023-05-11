const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const markdownIt = require("markdown-it");
const esbuild = require("esbuild");
const { NODE_ENV = 'production' } = process.env
const isProduction = NODE_ENV === 'production'

module.exports = function (config) {

  config.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['src/assets/scripts/main.js'],
      bundle: true,
      sourcemap: true,
      outfile: 'public/assets/scripts/main.js',
      target: isProduction? 'es6' : 'esnext'
    });
  });

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
