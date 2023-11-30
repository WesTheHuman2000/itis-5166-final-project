CREATE DATABASE IF NOT EXISTS budgetDB;

CREATE TABLE budget_data(
	budget_id int NOT NULL AUTO_INCREMENT ,
	title varchar(100) NOT NULL,
	budget_amt int,
    expense int,
    color VARCHAR(7),
 CONSTRAINT PRIMARY KEY (budget_id) 
 );
 
 INSERT INTO budget_data VALUES
 (DEFAULT, 'rent', 500, 500, '#FF5733'), (DEFAULT, 'food', 100, 50, '#92FF90'), (DEFAULT, 'entertainment', 100, 70, '#AC32A6');
 
 SELECT * FROM budget_data;
 
 DROP TABLE budget_data;