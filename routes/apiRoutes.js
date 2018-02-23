const axios = require('axios');
const router = require('express').Router();

const { Article } = require('../models/article');

router.get('/test', (req, res) => {
  res.json({
    'answer': 'ok'
  });
});

router.post('/articles', (req, res) => {
  let article = new Article({
    url: req.body.url,
    headline: req.body.headline,
    date: req.body.date
  });

router.get('/articles', (req, res) => {
  Article.find().then((articles) => {
    res.send({articles});
  }, (e) => {
    res.status(400).send(e);
  })
});

module.exports = router;