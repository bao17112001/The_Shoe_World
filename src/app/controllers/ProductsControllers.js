class ProductsController {
  index(req, res) {
    res.render("products");
  }

  //   show(req, res) {
  //     res.render("products");
  //   }
}

module.exports = new ProductsController();
