// Update with your config settings.
require('dotenv').config();
console.log('DB_USER⭐️', process.env.DB_USER);
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: process.env.DB_USER || 'user',
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
