var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
    
  });

  app.get("/menu", function(req, res) {
    db.Recipe.findAll({}).then(function(dbRecipes) {
      var recipeObject = {
        recipe: dbRecipes
      };
      console.log(JSON.stringify(recipeObject));
      res.render("menu", recipeObject);
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
