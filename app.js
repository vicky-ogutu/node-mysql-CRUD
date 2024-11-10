const express =require('express');
const mysql =require('mysql');
const bodyParser =require('body-parser');


const app =express()
const port =process.env.PORT || 5000;

app.use(express.json());

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);

});

//MYSQL
const pool = mysql.createPool({
    host:     'localhost',
    user:     'root1',
    password: '87654321',
    database: 'node-students'
});

//GET all
app.get('/vick', (req, res)=>{


    pool.getConnection((err, connection)=>{


        if (err) {
            return res.status(500).send('Database connection failed');
        }
        connection.query('SELECT * FROM year-1', (err, rows)=>{
            connection.release()
        })

    })
})