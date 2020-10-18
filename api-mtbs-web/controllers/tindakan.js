const ProcessTindakan = require('../models/tindakan');

const tindakan = async function(req, res, next) {
    const processTindakan = await ProcessTindakan.processTindakan(req.body);
    const result = {
        tbu: processTindakan[0],
        batuk: processTindakan[1],
        telinga: processTindakan[4],
        gizi:processTindakan[5],
        anemia:processTindakan[6],
        hiv:processTindakan[7]
    }
    res.json(result);
};

module.exports = {
    tindakan
};