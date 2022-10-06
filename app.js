const http=require('http')
const { url } = require('inspector')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our homepage')
    }
    if(req.url==='/about'){
        res.end('Here is our history')
    }
    res.end(`
    <h1>oops</h1>
    <p> we cant seem to find the page you are looking for</p>
<a href="/">Back Home</a>

    `)
})
server.listen(5000)