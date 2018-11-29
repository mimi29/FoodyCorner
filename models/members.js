"use strict";
module.exports = function (sequelize, DataTypes) {
  var Members = sequelize.define("Members", {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Members.associate = function(models) {
    Members.hasMany(models.Recipes, {
      onDelete: "cascade"
    });
  };
  return Members;
};