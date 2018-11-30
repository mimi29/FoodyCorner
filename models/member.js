
module.exports = function (sequelize, DataTypes) {
  var Member = sequelize.define("Member", {
    name: DataTypes.STRING,
    password: DataTypes.STRING
  },
  {
    timestamps: false,
    freezeTableName: false
  }, {});
  Member.associate = function(models) {
    Member.hasMany(models.Recipe, {
      onDelete: "cascade"
    });
  };
  return Member;
};