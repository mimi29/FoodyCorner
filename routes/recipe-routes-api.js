var db = require("../models");

module.exports = function (app) {
  // get all recipes
  app.get("/api/recipes", function (req, res) {
    db.Member.findAll({
      include: [db.Recipe]
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // find a recipes
  app.get("/api/recipes/:id", function (req, res) {
    db.Member.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Recipe]
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // add a recipes
  app.post("/api/recipes", function (req, res) {
    db.Member.create(req.body).then(function (dbMember) {
      res.json(dbMember);
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