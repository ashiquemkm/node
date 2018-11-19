var fs=require('fs')

fs.readFile('1.txt','utf8',function(err,data){
    if(err) console.log(err);
    else console.log(data);
});


var fs=require('fs')

fs.readFile('1.txt','utf8',function(err,data){
    if(err) console.log('erro',err);
    else console.log('the data is=',data);
});

