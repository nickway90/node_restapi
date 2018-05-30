process.env.APP_ENV = process.env.APP_ENV || 'development';
module.exports = require('./env/' + process.env.APP_ENV + '.js');