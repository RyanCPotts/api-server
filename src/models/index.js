// const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory' : process.env.DATABASE_URL;

// const { Sequelize, DataTypes } = require('sequelize');

// let sequelize = new Sequelize(DATABASE_URL, { dialect: 'postgres', logging: false });

// const peopleModel = require('./people.js');

// module.exports = {
//     db: sequelize,
//     People: peopleModel(sequelize, DataTypes)
// };

// require('dotenv').config();

// const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

// const { Sequelize, DataTypes } = require('sequelize');

// // The "url" argument must be of type string. Received undefined
// // This typically means that the environment variable expected to contain the database URL isn't set or isn't being accessed correctly.

// // Specify the dialect based on the environment
// // Error: Dialect needs to be explicitly supplied as of v4.0.0
// let sequelizeOptions = {
//     dialect: process.env.NODE_ENV === 'test' ? 'sqlite' : 'postgres' // Assuming PostgreSQL for non-test environments
// };

// if (process.env.NODE_ENV === 'test') {
//     sequelizeOptions.storage = 'memory'; // For SQLite
// }

// let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

// const peopleModel = require('./people.js');
// // const foodModel = require('./food.js');

// module.exports = {require('dotenv').config();

const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL;
console.log("DATABASE_URL:", DATABASE_URL);

let sequelizeOptions = {
    dialect: process.env.NODE_ENV === 'test' ? 'sqlite' : 'postgres' // Assuming PostgreSQL for non-test environments
};

if (process.env.NODE_ENV === 'test') {
    sequelizeOptions.storage = 'memory'; // For SQLite
}

console.log("sequelizeOptions:", sequelizeOptions);

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const peopleModel = require('./people.js');
const bicycleModel = require('./bicycles.js');
module.exports = {
    db: sequelize,
    People: peopleModel(sequelize, DataTypes),
    Bicycles: bicycleModel(sequelize, DataTypes),

};
//     db: sequelize,
//     People: peopleModel(sequelize, DataTypes),
//     // Food: foodModel(sequelize, DataTypes),
// };

