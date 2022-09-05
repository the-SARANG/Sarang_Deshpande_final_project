let  http = require('http');
let k = require('./export');
http.createServer(function(req,res){
     res.writeHead(200,{
        "content-Type":"text/html"
    });
    res.write("date="+k.date+"<br>");
    res.write("addition="+k.add(1,2));
    res.end();
}).listen(3000);

