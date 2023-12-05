mysql -u rehanqasim -p -h localhost -e "SHOW DATABASES;"

mysql -u rehanqasim -p -h localhost -e "CREATE DATABASE ecomstore;"



# mysql -u your_username -p -h localhost -e "USE your_database_name; CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255));"


mysql -u rehanqasim -p -h localhost -e "USE ecomstore; CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), email VARCHAR(255), password VARCHAR(255));"

mysql -u rehanqasim -p -h localhost -e "DROP TABLE IF EXISTS users;"



# mysql -u your_username -p your_database_name -e "DROP TABLE IF EXISTS users;"

mysql -u rehanqasim -p ecomstore -e "DROP TABLE IF EXISTS users;"


#  mysql -u your_username -p  your_database_name -e "DROP TABLE IF EXISTS users;"

mysql -u rehanqasim -p ecomstore -e "DROP TABLE IF EXISTS users;"

# 
mysql -u rehanqasim -p -h localhost -e "SHOW DATABASES"


# list tables

mysql -u rehanqasim -p ecomstore -e "SHOW TABLES;"
