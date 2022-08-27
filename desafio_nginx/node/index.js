const express = require('express');
const app = express();
const faker = require('faker');
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql2');
const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    const nome = faker.name.findName();
    connection.query(`INSERT INTO people (name) VALUES ('${nome}')`);
    connection.query(`SELECT name FROM people`, (error, results, fields) => {
        res.send(`
            <h1>Full Cycle Rocks, Baby!</h1>
            <ol>
                ${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}
            </ol>
        `);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));