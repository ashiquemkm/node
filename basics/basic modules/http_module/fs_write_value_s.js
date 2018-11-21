const fs=require('fs')

let value='Sync ICT ACADAMY CALICUT';
fs.writeFileSync('2.txt',value,'utf8');
console.log('value saved!');