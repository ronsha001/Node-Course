
const requestsHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if(url === '/') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>node server quest</title></head>')
        res.write('<body><form action="/create-user" method="POST"><input name="user" type="text"/> <button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/users') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>node server quest</title></head>')
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/create-user' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const bodyParser = Buffer.concat(body).toString()
            console.log(bodyParser)
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end();
        })
    }

    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write(`<body><h1>Hello from my first Node.js Server Quest</h1></body>`)
    res.write("</html>")
    res.end()
}

module.exports = requestsHandler