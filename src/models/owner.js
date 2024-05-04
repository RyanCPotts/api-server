'use strict';

const Owner = (sequelize, DataTypes) => sequelize.define('Owner', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likesBicycle: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Owner;
