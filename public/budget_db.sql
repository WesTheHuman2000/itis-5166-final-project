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
 (DEFAULT, 'rent', 500, 500, '#FF5733', 1), (DEFAULT, 'food', 100, 50, '#92FF90', 1), (DEFAULT, 'entertainment', 100, 70, '#AC32A6', 1);
 
 SELECT * FROM budget_data;
 
 DROP TABLE budget_data;
 
 INSERT INTO budget_data VALUES ('food2', 100, 50, '#92FF90');
 
 DELETE FROM budget_data WHERE budget_id =30;
 

  CREATE TABLE users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );

ALTER TABLE budget_data
ADD COLUMN user_id INT,
ADD CONSTRAINT fk_user_id
FOREIGN KEY (user_id)
REFERENCES users(user_id);

CREATE TABLE users (
	user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );
  
  SELECT * FROM users;
  
UPDATE budget_data SET user_id = 1 WHERE budget_id <4;

delete FROM budget_data WHERE user_id = 1;