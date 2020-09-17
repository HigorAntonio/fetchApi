const path = require('path');
// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      user : 'postgres',
      password : 'postgres',
      database : 'fetchApi'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },
  },
};
