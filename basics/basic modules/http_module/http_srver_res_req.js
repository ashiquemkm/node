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
});
server.listen(7000);
console.log('listening on port 7000...')

//req=request from clint side
//res=request from

//const name=require('http')

//const server=name.createServer(function(req,res){
   // if(req.url=='/'){

   // res.write('<h6>MKM Solution</h6>');//write aresponce to the clint
   // res.end();
   // }
   // if(req.url=='/users')
  //  {
  //      res.write(([1,2,3]));
  //      res.end();
  //  }
//});
//server.listen(5000);
//console.log('listening on port 3000...')