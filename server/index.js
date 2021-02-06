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

app.get('/:val', (req,res)=>{
    
    console.log("val:"+val);
    var val = req.params.val +'%';
    const sqlInsert = 'SELECT * FROM ENTITY WHERE VALUE LIKE ?' 
    console.log("query"+sqlInsert);
    //select * from mytable where name like "Mr.%"
    db.query(sqlInsert, [val], (err,result)=>{
        res.send(result);
    })
});

app.listen(3002, ()=>{

    console.log("Running on port 3002..");
})

