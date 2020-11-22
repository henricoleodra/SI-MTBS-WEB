var express = require('express');
var router = express.Router();
const tandabahayaumum = require('../controllers/tandabahayaumum');
const batuk = require('../controllers/batuk');
const diare = require('../controllers/diare');
const demam = require('../controllers/demam');
const telinga = require('../controllers/telinga');
const gizi = require('../controllers/gizi');
const anemia = require('../controllers/anemia');
const hiv = require('../controllers/hiv');
const tindakan = require('../controllers/tindakan');
const dataanak = require('../controllers/dataanak');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//Tanda Bahaya Umum
router.post('/TBU', tandabahayaumum.tandaBahayaUmum);

//Batuk
router.post(`/Batuk`, batuk.batuk);

//Diare
router.post(`/Diare`, diare.diare);

//Demam
router.post('/Demam', demam.demam);

//Telinga
router.post(`/Telinga`, telinga.telinga);

//Gizi 
router.post(`/Gizi`, gizi.gizi);
router.post(`/CalculateSD`, gizi.sdGizi);

//Anemia
router.post(`/Anemia`, anemia.anemia);

//HIV
router.post(`/HIV`, hiv.hiv);

//Tindakan
router.post(`/Tindakan`, tindakan.tindakan);

//Data Anak Temp
router.get(`/DataAnak`, dataanak.dataanak);

module.exports = router;