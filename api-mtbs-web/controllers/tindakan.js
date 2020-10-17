const ProcessTindakan = require('../models/tindakan');

const tindakan = async function(req, res, next) {
    const processTindakan = await ProcessTindakan.processTindakan(req.body);
    const result = {
        tbu: processTindakan[0]
    }
    res.json(result);
};

module.exports = {
    tindakan
};