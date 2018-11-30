"use strict";
module.exports = function (sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {});
  Recipes.associate = function (models) {
    Recipes.hasMany(models.Ingredients, {
      onDelete: "cascade"
    });
    Recipes.belongsTo(models.Categories, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Recipes;
};