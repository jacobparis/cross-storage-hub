const CrossStorageHub = require('cross-storage').CrossStorageHub

module.exports = (req, res) => {
  // Config s.t. subdomains can get, but only the root domain can set and del
  CrossStorageHub.init([
    {origin: /.*/, allow: ['get', 'set', 'del']},
  ]);

  res.status(200).send('<p> Connected to HUB </p>')
};