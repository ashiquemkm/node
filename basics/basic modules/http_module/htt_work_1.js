const name=require('http')

const server=name.createServer(function(req,res){
    if(req.url=='/'){

    res.write('<h6>MKM Solution</h6>');//write aresponce to the clint
    res.end();
    }
    if(req.url=='/users')
    {
        res.write(JSON.stringify([1,2,3]));
        res.end();
       
        
    }
    if(req.url=='/friends')
    {
            var fs=require('fs')

            var data = fs.readFileSync('1.txt','utf8',);
            console.log(data);

            

            var fs=require('fs')

            var data = fs.readFileSync('1.txt','utf8',function(err,data){
            if(err) console.log('erro',err);
            else console.log(' new the data is=',data);

            

});
console.log('new 2 the data is =', data);
    }
});
server.listen(7000);
console.log('listening on port 7000...')