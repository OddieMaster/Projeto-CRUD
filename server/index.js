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
app.use(express.json());


app.get ("/api/get", (req, res) => {

const sqlSelect = "SELECT * FROM movie_schema;";
db.query(sqlSelect, (err, result) => {
    res.send (result);
    });
});  



app.post("/api/insert", (req, res) =>  {

    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert=
    "INSERT INTO movie_schema (movieName, movieReview) VALUES (?,?);"
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log (err);
        });
    });




app.listen(3001, () => {
    console.log ("running on port 3001");

});

