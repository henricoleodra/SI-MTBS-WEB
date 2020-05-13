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
router.post('/TBU/1', tandabahayaumum.tandaBahayaUmum1);
router.post('/TBU/2', tandabahayaumum.tandaBahayaUmum2);
//Batuk
router.post('/Batuk/1', batuk.batuk1);
router.post('/Batuk/2', batuk.batuk2);
//Diare
router.post(`/Diare`,diare.diare);
router.post(`/Diare/1`,diare.diare1);
router.post(`/Diare/2`,diare.diare2);
router.post(`/Diare/3`,diare.diare3);
//Demam
router.post('/Demam', demam.demam);
//Telinga
router.post(`/Telinga/1`,telinga.telinga1);
router.post(`/Telinga/2`,telinga.telinga2);
//Anemia
router.post(`/Anemia`,anemia.anemia);
//HIV
router.post(`/HIV/1`,hiv.hiv1);
router.post(`/HIV/2`,hiv.hiv2);
router.post(`/HIV/3`,hiv.hiv3);

module.exports = router;
