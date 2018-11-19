var mkm=require('os')

console.log("*****************************");
console.log("\n\t");
console.log('total hemmory ='+mkm.totalmem())
console.log('free memmory  ='+mkm.freemem())
console.log("\n");
console.log("*****************************");

var fmem=mkm.totalmem();
var tmem=mkm.freemem();

console.log("------------------------------");
console.log("\n\t");
console.log(`total hemmory = ${fmem}`)
console.log(`free memmory  = ${fmem}`)
console.log("\n");
console.log("------------------------------");

