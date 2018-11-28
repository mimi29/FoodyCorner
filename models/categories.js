"use strict";
module.exports = function (sequelize, DataTypes) {
  var Categories = sequelize.define("Categories", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Categories.associate = function(models) {
    Categories.hasMany(models.Recipes, {
      onDelete: "cascade"
    });
  };
  return Categories;
};