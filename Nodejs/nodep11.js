const http=require('http')
function printMessage()
{
    console.log("Hello every 2 second..")
}
setInterval(printMessage,2000)

const server=http.createServer((req,res)=>{
    res.end("Server is Running..")
});
server.listen(3000);