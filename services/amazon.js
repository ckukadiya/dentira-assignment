const request = require("request-promise");
const cheerio = require("cheerio");

const amazonSearch = async (q) => {
  const result = await request.get(`https://www.amazon.in/s?k=${q}`);
  const $ = await cheerio.load(result);

  const data = []
  $(".s-asin").each((i, el) => {
    data.push(new Promise((resolve) => {
        const name = $(el).find("h2 span").text();
        const price = $(el).find(".a-price-whole").text();
        const image = $(el).find(".s-image").attr("src");
        const link =
          "https://www.amazon.in" + $(el).find(".a-link-normal").attr("href");
        resolve({ name, price, image, link });
    }))
    
  });
  const r =await Promise.all(data)
  return r;
};

module.exports = {
    amazonSearch,
};
