const router = require('express').Router();
const knex = require('./knex.js');

router.get('/a', async (req, res) => {
  try {
    console.log('thecherのGET');
    res.status(200).send('thecherのGET');
  } catch (error) {}
});

router.post('/b', async (req, res) => {
  try {
    console.log('thecherのPOST');
    res.status(200).send('thecherのPOST');
  } catch (error) {}
});

router.put('/c', async (req, res) => {
  try {
    console.log('thecherのPUT');
    res.status(200).send('thecherのPUT');
  } catch (error) {}
});

router.delete('/d', async (req, res) => {
  try {
    console.log('thecherのDELETE');
    res.status(200).send('thecherのDELETE');
  } catch (error) {}
});

module.exports = router;
