class SiteController {
  index(rep, res) {
    res.render("home");
  }

  slider(rep, res) {
    res.render("slider");
  }
}

module.exports = new SiteController();
