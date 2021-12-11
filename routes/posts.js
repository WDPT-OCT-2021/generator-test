var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/test', function (req, res, next) {
  res.json({
    postNumber: 1,
    content: 'This is the first post in our blog',
    creator: 'John Smith',
  });
});

module.exports = router;

//res.send('usually just text')
//res.render() - can pull up handlebars files
// res.json() --this sends raw JSON data
