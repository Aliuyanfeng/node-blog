var express = require('express');
var router = express.Router();
var Topic = require('../models/topic')
var Classify = require('../models/classify')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/getclassify', function (req, res, next) {
  Classify.find((err, classifies) => {
    if (err) {
      return next(err)
    }
    res.json({
      status: 0,
      msg: 'is ok',
      result: {
        count: classifies.length,
        list: classifies
      }
    })
  })
})


router.post('/write', function (req, res, next) {
  console.log(req.body)
  var article = new Topic(req.body)
  article.save(function (err) {
    if (err) {
      return next(err)
    }
    res.json({
      status: 0,
      msg: 'article is ok'
    })
  })
})

router.get('/getAllArticle', function (req, res, next) {
  Topic.find((err, topics) => {
    if (err) {
      return next(err)
    }
    res.json({
      status: 0,
      msg: 'find is success',
      list: topics

    })
  })
})

router.get('/getArticleById/:id', function (req, res, next) {
  console.log(req.params.id)
  Topic.findOne({
    _id: req.params.id
  }, function (err, topic) {
    if (err) {
      return next(err)
    }
    // console.log(topic)
    res.json({
      status: 0,
      msg: 'articById is ok..',
      topic: topic
    })
  })
})


module.exports = router;