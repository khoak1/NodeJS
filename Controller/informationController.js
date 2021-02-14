const data = require('../Models/modelsInformation');

const getDataInformation = (req, res) => {
    data.findAll().then((data) => 
        res.json(data)
    ).catch((err) => (console.log('Run with error: ' +err)));
}

const getOneData = (req, res) => {
    data.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => res.json(data)).catch((err) => (console.log('Run with err ' + err)));
}

const getPhone = (req, res) => {
    data.findOne({
        where: {
            phone: req.params.phone
        }
    }).then((data) => res.json(data)).catch((err) => (console.log('Run with err ' + err)));
}

module.exports = {getDataInformation, getOneData, getPhone};