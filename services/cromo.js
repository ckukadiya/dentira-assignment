const axios = require('axios');

const cromaSearch = async (q) => {
  const result = await axios.get(`https://api.croma.com/product/allchannels/v1/search?currentPage=0&query=${q}&fields=FULL`);
  let data = [];
  if (result.data) {
    const { products } = result.data
      data = products.map(({ name,  plpImage, url, price: { value }}) => {
        return {
          name,
          image: plpImage,
          price: value,
          link: `https://www.croma.com/${url}`
        }
      })
  }
  return data;
};

module.exports = {
  cromaSearch,
};
