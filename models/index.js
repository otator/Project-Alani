const sequelize = require('sequelize')
const db = require('../config/database')
const loginmodel = require('./login')
const signupmodel = require('./signup')

const login = loginmodel(db, Sequelize)
const signup = signupmodel(db, Sequelize)

db.sync({force: false}).then(()=>{
    console.log('Table created!')
})

module.exports = {login , signup}