const name=require('http')

const server=name.createServer(function(req,res){
    res.write('<h6>MKM Solution</h6>');//write aresponce to the clint
    res.end();
});
server.listen(5000);
console.log('listening on port 3000...')

//req=request from clint side
//res=request from