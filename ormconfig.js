// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

let logging = false;

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
  logging = true;
}

module.exports = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  logging,

  entities: ['./src/app/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],

  cli: {
    migrationsDir: './src/database/migrations',
  },
};
