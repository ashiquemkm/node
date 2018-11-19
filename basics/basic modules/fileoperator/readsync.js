var fs=require('fs')

var data = fs.readFileSync('1.txt','utf8',);
console.log(data);


var fs=require('fs')

var data = fs.readFileSync('1.txt','utf8',function(err,data){
    if(err) console.log('erro',err);
    else console.log(' new the data is=',data);
});
console.log('new 2 the data is =', data);