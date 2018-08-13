const fs = require('fs');

const res = fs.readFile('./nodefs.js' , (err , data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});

console.log('gogo');