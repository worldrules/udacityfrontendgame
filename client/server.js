const http = require('http')
const port = 3000
const ip = 'localhost'

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('<h1>Home</h1>')
    }

    if (req.url == '/inscreva-se') {
        res.end('<h1>Inscreva-se</h1>')
    }

    if (req.url == '/local') {
        res.end('<h1>Local</h1>')
    }

    if (req.url == '/contato') {
        res.end('<h1>Contato</h1>')
    }

    res.end('<h1>URL sem resposta definida!</h1>')
})

server.listen(port, ip, () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
    console.log('Para derrubar o servidor: ctrl + c');
})