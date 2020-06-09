const express = require('express')
const server = express()
const db = require('./database/db.js')
const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server.use(express.static("public"))
server.use(express.urlencoded({ extended: true }))

server.listen(3000)
console.log('Ouvindo na porta localhost:3000')

server.get('/', (req, res) => {
    return res.render('index.html')
})

server.get('/new-account', (req, res) => {
    return res.render('create-account.html')
})

server.post("/created-account", (req, res) => {
    const query = `
        INSERT INTO logins (
            email,
            password
        ) VALUES (?,?);
`

    const body = req.body
    const values = [body.email, body.password[0]]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            res.render('create-account.html', { saved: false })
        }
        return res.render('create-account.html', { saved: true })
    }

    db.all(`SELECT email FROM logins WHERE email = '${body.email}'`, (err, rows) => {
        if (rows.length == 0) {
            db.run(query, values, afterInsertData)
        } else {
            return res.render('create-account.html', { saved: 'unavailable' })
        }
    })
}) 

server.post('/congratulation', (req, res) => {
    const body = req.body
    db.all(`SELECT email FROM logins WHERE email = '${body.email}' AND password = '${body.password}'`, (err, rows) => {
        if (err) {
            return console.log(err)
        }
        if (rows.length == 1 && rows[0].email == body.email) {
            return res.render('congratulation.html')
        } else {
            return res.render('index.html', {login: false})
        }
    })
})