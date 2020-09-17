const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://apis.justwatch.com/content/genres/locale/pt_BR');
  const data = await response.json();

  console.log(data);
})();