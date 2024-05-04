'use strict';

const Bicycles = (sequelize, DataTypes) => sequelize.define('Bicycles', {
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  ownerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Bicycles',
      key: 'id',
    },
  },

});

module.exports = Bicycles;
