const path = require('path');
const {join} = require('path');
const {resolve} = require('path');
const {extname} = require('path');
const {basename} = require('path');
const {parse,format} = require('path');

console.log(path.basename('../index.php'));
console.log(path.dirname('../index.php'));
console.log(path.normalize('/'));

//拼接
console.log(join('/usr','local'));

//相对路径到绝对路径
console.log(resolve('./'));

console.log(extname('../index.php'));

console.log(basename('../index.php'));

const filePath = '../index.js';
//一个路径的完整object对象
console.log(parse(filePath));
console.log(format(parse(filePath)));

