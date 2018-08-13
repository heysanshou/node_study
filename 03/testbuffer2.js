const buff = Buffer.from('This is a dog');
console.log(buff.length);

console.log(buff.toJSON());

const buff2 = Buffer.alloc(10);
buff2[0] = 2;
buff2[1] = 3;
buff2[2] = 100;
buff2[3] = 12;
console.log(buff2);

console.log(buff2.toString('base64'));







