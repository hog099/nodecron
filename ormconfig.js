// {
//   "type": "sqlite",
//   "database": "./src/database/database.sqlite",
//   "migrations": ["./src/database/migrations/*.ts"],
//   "entities": ["./src/models/*.ts"],
//   "logging": false,
//   "cli": {
//     "migrationsDir": "./src/database/migrations"
//   }
// }

// console.log('process.env.DATABASEE_URL :>> ', process.env.DATABASE_URL);
module.exports = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "synchronize": true,
  "logging": false,
  "entities": [
      "src/entities/**/*.ts"
  ],
  "migrations": [
      "src/database/migration/**/*.ts"
  ],
  "subscribers": [
      "src/subscriber/**/*.ts"
  ],
  "seeds": ['src/database/seeds/**/*.ts'],
  "cli": {
      "entitiesDir": "src/entities",
      "migrationsDir": "src/database/migration",
      "subscribersDir": "src/subscriber",
      "seedsDir": "src/database/seeds"
  }
}
