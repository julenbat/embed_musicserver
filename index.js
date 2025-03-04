import http from 'node:http'
import https from 'node:https'
import process from 'node:process'
import fs from 'node:fs'

const {DOMAIN, KEY_PATH, CERT_PATH} = process.env

const httpServer = http.createServer();
const httpsServer = https.createServer({
	key: fs.readFileSync(KEY_PATH),
	cert: fs.readFileSync(CERT_PATH)
})


httpServer.on('request', (req, rest) => {
	res.writeHead(301, {'Location': DOMAIN})
})


httpsServer.on('request', (req, res) => {

	res.writeHead(200, {"Content-Type": "text/html"});
	res.end("Hello World");
})




httpServer.listen(80)
