const fs=require('fs')

let value='Async ICT ACADAMY CALICUT';
fs.writeFile('2.txt',value,(err)=>
{
if(err) throw err;

console.log('value saved!');
});