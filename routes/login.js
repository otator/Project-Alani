const express = require('express')
const router = express.Router()
const {login} = require('../models/login')

router
   .route('/login')
    .get((req,res)=>{
        login.findAll().then(login =>{
            res.json(login)
        })
        .catch((err)=> console.log(err.message))
    })

module.exports= router