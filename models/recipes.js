'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    name: DataTypes.STRING,
    description: DataTypes.STRING, 
  }, {});
  recipes.associate = function(models) {
    recipes.hasMany(models.ingredients, {
      onDelete: "cascade"
    });
  recipes.belongsTo(models.categories, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return recipes;
};