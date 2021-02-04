const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database : 'searchdb'
});

app.use(cors());

app.get('/', (req,res)=>{
    
    console.log("request: " + req);
    const sqlInsert = "SELECT * FROM ENTITY"
    db.query(sqlInsert, (err,result)=>{
        res.send(result);
    })
});



app.listen(3002, ()=>{

    console.log("Running on port 3002..");
})

