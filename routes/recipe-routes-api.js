var db = require("../models");

module.exports = function (app) {
  // get all recipes
  app.get("/api/recipes", function (req, res) {
    db.Recipe.findAll({
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // find a recipes
  app.get("/api/recipes/:id", function (req, res) {
    db.Recipe.findOne({
      where: {
        id: req.params.id
      },
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  app.post("/api/recipes", function (req, res) {
    db.Recipe.create(req.body).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  app.delete("/api/recipes/:id", function (req, res) {
    db.Member.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

};