require('dotenv').config()

module.exports = {
    user:{
    username: process.env.DB_USERNAME,
    passwoed: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT,
    logging: false
    
}}