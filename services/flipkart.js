const request = require("request-promise");
const cheerio = require("cheerio");

const flipkartSearch = async (q) => {
  const result = await request.get(`https://www.flipkart.com/search?q=${q}`);
  const $ = await cheerio.load(result);

  const data = [];
  $("._2kHMtA").each((i, el) => {
    data.push(
      new Promise((resolve) => {
        const name = $(el).find("._4rR01T").text();
        const price = $(el).find("._30jeq3").text();
        const image = $(el).find("._396cs4").attr("src");
        const link =
          "https://www.flipkart.com/" + $(el).find("._1fQZEK").attr("href");
        resolve({ name, price, image, link });
      })
    );
  });
  const r = await Promise.all(data);
  return r;
};

module.exports = {
  flipkartSearch,
};
