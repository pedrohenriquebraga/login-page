const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./src/database/logins.db')
module.exports = db

// Cria a tabela

db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS logins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT,
        password TEXT
    )
`)

    // // Inserir dados na tabela
    // const query = `
    //         INSERT INTO logins (
    //             email,
    //             password
    //         ) VALUES (?,?);
    // `

    // const values = []

    // db.run(query, values, (err) => {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log('Concluído')
    //     console.log(this)
    // })

    // db.all(`SELECT * FROM logins`, (err, rows) => {
    //     if (err) {
    //         console.log(err)
    //     }
    //     console.log(rows)
    // })

    // module.exports = db
})