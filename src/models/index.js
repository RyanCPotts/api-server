const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL;

let sequelizeOptions = {
    dialect: process.env.NODE_ENV === 'test' ? 'sqlite' : 'postgres' // Assuming PostgreSQL for non-test environments
};

if (process.env.NODE_ENV === 'test') {
    sequelizeOptions.storage = 'memory'; // For SQLite
}

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);
const Collection = require('./collection.js');

const ownerSchema = require('./owner.js');
const bicycleSchema = require('./bicycles.model.js');

const ownerModel = ownerSchema(sequelize, DataTypes);
const bicycleModel = bicycleSchema(sequelize, DataTypes);


ownerModel.hasMany(bicycleModel, { foreignKey: 'ownerId', sourceKey: 'id' });
bicycleModel.belongsTo(ownerModel, { foregnKey: 'ownerId', targetKey: 'id' });

const ownerCollection = new Collection(ownerModel);
const bicycleCollection = new Collection(bicycleModel);


module.exports = {
    db: sequelize,
    Owner: ownerCollection,
    Bicycles: bicycleCollection,

};
//     db: sequelize,
//     People: peopleModel(sequelize, DataTypes),
//     // Food: foodModel(sequelize, DataTypes),
// };

