// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds',
    migrations : {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/development'
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/classifieds_test',
    migrations : {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/test'
    }
   },
   
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations : {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds/production'
    }
   },

};
