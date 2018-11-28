'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  menus.associate = function(models) {
      menus.hasMany(models.categories, {
        onDelete: "cascade"
      });
  };
  return menus;
};