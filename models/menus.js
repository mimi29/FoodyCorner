"use strict";
module.exports = function (sequelize, DataTypes) {
  var Menus = sequelize.define("Menus", {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Menus.associate = function (models) {
    Menus.hasMany(models.Categories, {
      onDelete: "cascade"
    });
  };
  return Menus;
};