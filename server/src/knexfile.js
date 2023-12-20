// Update with your config settings.
require('dotenv').config();
// console.log(process.env);
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: process.env.DB_USER || 'yokota',
      database: process.env.DB_NAME || 'motta',
    },
    migrations: {
      directory: '../db/migrations',
    },
    seeds: {
      directory: '../db/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: '../db/migrations',
    },

    seeds: { directory: '../db/seeds' },
  },
};
