const router = require('express').Router();
const knex = require('./knex.js');

router.get('/a', async (req, res) => {
  try {
    res.status(200).send('stundentのGET');
  } catch (error) {}
});

router.post('/b', async (req, res) => {
  try {
    console.log('接続を確認');
    res.status(200).send('stundentのPOST');
  } catch (error) {}
});

router.put('c', async (req, res) => {
  try {
  } catch (error) {}
});

router.delete('d', async (req, res) => {
  try {
    console.log('接続を確認');
    res.status(200).send('stundentのDELETE');
  } catch (error) {}
});

module.exports = router;
