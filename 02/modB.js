module.exports.test = 'B';

const modB = require('./modA');
console.log('modB:',modB.test);

module.exports.test = 'BB';
