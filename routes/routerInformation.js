module.exports = (app) => {
    const data = require('../Controller/informationController');
    app.route('/').get(data.getDataInformation);
    app.route('/:id').get(data.getOneData);
    app.route('/:phone').get(data.getPhone);
}