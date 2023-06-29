const Diary = require('../models/Diary')

async function index(req, res) {
    try {
        const entries = await Diary.getAll();
        res.status(200).send(entries)
    } catch (err) {
        res.status(404).send({ 'error': err.message, 'stack': err.stack })
    }

}

module.exports = { index }
