const express = require('express')
const router = express.Router()
const {signup} = require('../models/signup')

router
   .route('/signup')
    .get((req,res)=>{
        login.findAll().then(signup =>{
            res.json(signup)
        })
        .catch((err)=> console.log(err.message))
    })

module.exports= router