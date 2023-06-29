require("dotenv").config();
const fs = require('fs');
const db = require('./connect');

const sql = fs.readFileSync("./server/db/diary.sql").toString();

db.query(sql)
    .then(data => console.log('Setup completed.'))
    .catch(error => console.log(error))
