const knex = require('knex');
const config = require('../knexfile');
require('dotenv').config();
const env = process.env.NODE_ENV;

console.log('process.env::::', env);

module.exports = knex(config[env]);
