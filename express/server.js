const http = require('http')
const app = require('./main')
const port = 3333

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`server run at port ${port}`)
})