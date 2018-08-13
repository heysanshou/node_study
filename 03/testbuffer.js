console.log(Buffer.alloc(1));
console.log(Buffer.alloc(10));
console.log(Buffer.alloc(20));


console.log(Buffer.byteLength('666'));
console.log(Buffer.byteLength('abc'));
console.log(Buffer.byteLength('哈哈'));

console.log(Buffer.isBuffer({}));
console.log(Buffer.isBuffer(''));
console.log(Buffer.isBuffer(Buffer.alloc(1)));

const buf1 = Buffer.from('This is ');
const buf2 = Buffer.from('a ');
const buf3 = Buffer.from('dog');
console.log(Buffer.isBuffer(buf1));
console.log(Buffer.concat([buf1,buf2,buf3]));
console.log(Buffer.concat([buf1,buf2,buf3]).toString());

