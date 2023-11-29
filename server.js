const express = require('express');

const port = 5000;
const mysql = require('mysql2')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

var connection = mysql.createConnection({
    host        : 'localhost', //127.0.0.1
    user        : 'root', 
    password    : 'password', // change this
    database    : 'budgetdb'
});



app.get('/budget', async (req, res)=>{
    // this gets the info from the database
    connection.query('SELECT * FROM budget_data', function(error, results, fields){
        if (error) {
            res.status(500).send('Error fetching patient data');
            return;
        }
        // after getting the db info, it assigns it to patientData then renders the ejs 
        // template views/patient.ejs which is essentially an html with js in it
        
        res.json(results);
        
    });
    
});

app.listen(port, ()=>{
    console.log(`API running on port http://localhost:${port}`)
    connection.connect((err)=>{
        if (err) throw err;
        console.log("Database connected!")
    })
});
