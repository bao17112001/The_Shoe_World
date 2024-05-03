const siteRouter = require("./site");
const productsRouter = require("./products");

function route(app) {
  app.use("/san-pham", productsRouter);
  app.use("/", siteRouter);
}

module.exports = route;
