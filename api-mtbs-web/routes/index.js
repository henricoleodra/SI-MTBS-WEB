var express = require('express');
var router = express.Router();
const tandabahayaumum = require('../controllers/tandabahayaumum');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.post('/TBU',(req, res) => {
  
// });


router.post('/TBU/1', tandabahayaumum.tandaBahayaUmum1);

module.exports = router;
