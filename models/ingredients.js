"use strict";
module.exports = function(sequelize, DataTypes) {
  var Ingredients = sequelize.define("Ingredients", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Ingredients.associate = function (models) {
    Ingredients.belongsTo(models.Recipes, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Ingredients;
};