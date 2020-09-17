const fetch = require('node-fetch');
const knex = require('./database');

(async () => {
  const response = await fetch('https://apis.justwatch.com/content/genres/locale/pt_BR');
  const data = await response.json();

  // console.log(data);

  for (d of data) {
    const { short_name, technical_name, translation, slug } = d;
    
    const genre = await knex('genres').insert({ short_name, technical_name, translation, slug });

    console.log(genre);
  }

  knex.destroy();
})();