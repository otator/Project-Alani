const  Sequelize  = require('sequelize')

const env = process.env.NODE_ENV ||'local' 
const config = require('./config')[env]

module.exports = new Sequelize('node_app','root','1234',
    /*config.username,
    config.password,
    config.database,
    config,
    */
    {
        host:'localhost',
        dialect:'mysql'
    });
