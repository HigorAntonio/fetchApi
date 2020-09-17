const path = require('path');
// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      user : 'fetchApi',
      password : 'postgres',
      database : 'postgres'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
  },
};
