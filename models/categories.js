'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    categories.hasMany(models.recipes, {
      onDelete: "cascade"
    });
  };
  return categories;
};