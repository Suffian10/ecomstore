
DROP TABLE IF EXISTS users;


USE ecomstore; 
CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255));


ALTER USER 'rehanqasim'@'localhost' IDENTIFIED WITH mysql_native_password BY 'rehanqasim';


DROP TABLE IF EXISTS users;