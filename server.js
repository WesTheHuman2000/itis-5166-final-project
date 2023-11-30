const express = require('express');
const compression = require('compression');
const port = 5000;
const mysql = require('mysql2')
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use(compression());

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

app.post('/createBudget', (req, res) => {
    const {
        title,
        budget_amt,
        expense,
        color
    } = req.body;
    console.log(req.body);
    // Perform the database insertion
    connection.query('INSERT INTO budget_data (title, budget_amt, expense, color) VALUES (?, ?, ?, ?)',
        [title, budget_amt, expense, color],
        (error, results) => {
            if (error) {
                console.error('Error inserting budget:', error);
                res.status(500).send(`Error inserting new budget: ${error.message}`);
            } else {
                // Redirect to the patient list page or any other page as needed
                console.log('Received form data:', req.body);
                res.status(200).send('Budget inserted successfully');
            }
        }
    );
});

app.listen(port, ()=>{
    console.log(`API running on port http://localhost:${port}`)
    connection.connect((err)=>{
        if (err) throw err;
        console.log("Database connected!")
    })
});

