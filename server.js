const express = require('express');
const compression = require('compression');
const port = 5000;
const mysql = require('mysql2')
const cors = require('cors');
const jwt = require('jsonwebtoken');

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

app.post('/api/login', (req, res)=>{
    const { username, password } = req.body; 
    const secretKey = 'My super secret key';
    connection.query('SELECT * FROM users WHERE username = ?', [username], (error, results)=>{
        if (error){
            console.error('DB query failed: ', error);
            res.status(500).json({
                success: false,
                token: null,
                err: 'interanl server error'
            });
            return;
        }
        if (results.length ===0){
            res.status(401).json({
                success: false,
                token: null,
                err: 'Username or password is incorrect'
            });
            return;
        }

        const user = results[0];
        if (password === user.password){
            let token= jwt.sign({id: user.id, username: user.username}, secretKey,{expiresIn: '3m'});
            res.json({
                success: true,
                err: null, 
                token
            });
        } else {
            res.status(401).json({
                success: false,
                token: null,
                err: 'Username or password is incorrect'
            });
        }
    })

    console.log(req.body);
    console.log('Username: ' +username);
    console.log('Pass: ' +password);
});

// for getting specific entries
app.get('/budget/:budget_id', async (req, res)=>{
    const budget_id = req.params.budget_id;
    
    connection.query('SELECT * FROM budget_data WHERE budget_id = ?', [budget_id], (error, results)=>{
        if (error){
            console.error('error fetching budget data', error);
            res.status(500).send('error fetching budgeting data');
        } else {
            res.json(results[0])
        }
    });
});

app.delete('/delete/:budget_id', (req, res) => {
    const toDelete = req.params.budget_id;

    connection.query('DELETE FROM budget_data WHERE budget_id = ?',
        [toDelete],
        (error, results) => {
            if (error) {
                console.error('Error deleting data:', error);
                res.status(500).send('Error deleting data');
            } else {
                res.status(200).send('Delete successful');
            }
        }
    );
});

// for updating entries
app.put('/updateBudget/:budget_id', async (req,res)=>{
    const toUpdate = req.params.budget_id;
    
    connection.query('UPDATE budget_data SET title = ?, budget_amt = ?, expense =?, color=? WHERE budget_id=?',
    [req.body.title, req.body.budget_amt, req.body.expense, req.body.color, toUpdate],
    (error, results) => {
        if (error) {
            console.error('Error updating data:', error);
            res.status(500).send('Error updationg data');
        } else {
            res.status(200).send('updating successful');
        }
        }
    )
})

app.listen(port, ()=>{
    console.log(`API running on port http://localhost:${port}`)
    connection.connect((err)=>{
        if (err) throw err;
        console.log("Database connected!")
    })
});

