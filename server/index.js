const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');

const mysql = require('mysql');


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Eduardo123!',
    database: 'crudapp',
});
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

app.post("/api/insert", (req, res) =>  {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert=
    "INSERT INSERT INTO movie_schema (movieName, movieReview) VALUES (?,?);"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log (result);
        });
    });




app.listen(3001, () => {
    console.log ("running on port 3001");

});

