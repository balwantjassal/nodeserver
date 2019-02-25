const http = require("http")
var server = http.createServer((req,res)=>{
    var str = ''
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type':'text/html'})
        str += "<html><head><title>NodeJS App</title></head>"
        str += "<body>This is my Home Page</body>"
        str += "</html>"

        res.write(str)
        res.end()
    }else if(req.url == '/about'){
            res.writeHead(200, {'Content-Type':'text/html'})
            str += "<html><head><title>About Page</title></head>"
            str += "<body>This is About US Page</body>"
            str += "</html>"
    
            res.write(str)
            res.end()
    }else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end("Invalid Request")
    }
    

})
var port = 3000
server.listen(port,()=>{
    console.log(`Server is listening at Port ${port}`)
});