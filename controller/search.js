const { amazonSearch } = require("../services/amazon")
const { cromaSearch } = require("../services/cromo")
const { flipkartSearch } = require("../services/flipkart")

const search = async (req, res, next) => {
    const { query: { q }  } = req
    const amazon = await amazonSearch(q)
    const flipkart = await flipkartSearch(q)
    const croma = await cromaSearch(q)
    res.status(200).json({
        amazon,
        flipkart,
        croma
    })
}

module.exports = {
    search
}