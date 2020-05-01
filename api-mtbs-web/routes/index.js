var express = require('express');
var router = express.Router();
const tandabahayaumum = require('../controllers/tandabahayaumum');
const batuk = require('../controllers/batuk');
const diare = require('../controllers/diare');
const anemia = require('../controllers/anemia');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Tanda Bahaya Umum
router.post('/TBU/1', tandabahayaumum.tandaBahayaUmum1);
router.post('/TBU/2', tandabahayaumum.tandaBahayaUmum2);
//Batuk
router.post('/Batuk/1', batuk.batuk1);
router.post('/Batuk/2', batuk.batuk2);
//Diare
router.post(`/Diare/1`,diare.diare1);
router.post(`/Diare/2`,diare.diare2);
router.post(`/Diare/3`,diare.diare3);
//Anemia
router.post(`/Anemia`,anemia.anemia);

module.exports = router;
