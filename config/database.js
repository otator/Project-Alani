const  Sequelize  = require('sequelize')

const env = process.env.NODE_ENV ||'local' 
const config = require('./config')

module.exports = new Sequelize('node_app','root','1234',
    /*config.local.username,
    config.local.password,
    config.local.database,
    config,
    */
    {
        host:'localhost',
        dialect:'mysql'
    });
