// this is the config file

// copy pasta from:
// https://www.11ty.dev/docs/config/

// Import prior to `module.exports` within `.eleventy.js`
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    // include style & assets
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets/');
    // date formatting
    eleventyConfig.addFilter("postDate", (dateObj) => {
      return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    // copyright dates
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };