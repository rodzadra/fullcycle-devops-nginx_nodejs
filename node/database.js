require('dotenv').config();

const mysql = require('mysql');

const config = {
  host: process.env.DB_HOST           || 'db',
  user: process.env.DB_USER           || 'root',
  password: process.env.DB_PASS       || 'root',
  database: process.env.DB_DATABASE   || 'fullcycle_devops_docker'
};

const connection = mysql.createConnection(config)
const createTabel = 'CREATE TABLE IF NOT EXISTS `people` ( `id` int(11) NOT NULL AUTO_INCREMENT, `name` varchar(75) NOT NULL, PRIMARY KEY (`id`) );'
connection.query(createTabel)

module.exports = connection;





