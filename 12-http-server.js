const http = require ('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to main page')
    }
    if(req.url === '/about'){
        res.end('About page')
    }
    res.end(`
        <h1>Error 404</h1>
        <p>Page not found</p>
        `)
})

server.listen(5000)