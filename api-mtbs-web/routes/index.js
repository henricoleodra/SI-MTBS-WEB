var express = require('express');
var router = express.Router();
const tandabahayaumum = require('../controllers/tandabahayaumum');
const batuk = require('../controllers/batuk');
const diare = require('../controllers/diare');
const demam = require('../controllers/demam');
const telinga = require('../controllers/telinga');
const anemia = require('../controllers/anemia');
const hiv = require('../controllers/hiv');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Tanda Bahaya Umum
router.post('/TBU', tandabahayaumum.tandaBahayaUmum);

//Batuk
router.post(`/Batuk`,batuk.batuk);

//Diare
router.post(`/Diare`,diare.diare);

//Demam
router.post('/Demam', demam.demam);

//Telinga
router.post(`/Telinga`,telinga.telinga);

//Anemia
router.post(`/Anemia`,anemia.anemia);

//HIV
router.post(`/HIV`,hiv.hiv)
router.post(`/HIV/1`,hiv.hiv1);
router.post(`/HIV/2`,hiv.hiv2);
router.post(`/HIV/3`,hiv.hiv3);

module.exports = router;
