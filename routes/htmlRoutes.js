var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
    
  });

  app.get("/api/menus", function(req, res) {
    db.Menu.findAll({}).then(function(dbRecipes) {
      res.render("menu", {
        recipe: dbRecipes

      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/recipes/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("recipes", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
