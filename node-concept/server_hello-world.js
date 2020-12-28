var http = require('https')

var server = http.createServer(function(req, res){
    res.writeHead(200, {'content- type': 'pain/text'});
    res.end("working")
})
server.listen(3000)