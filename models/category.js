
module.exports = function (sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    timestamps: false,
    freezeTableName: false
  }, {});
  return Category;
};