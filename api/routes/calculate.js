const express = require('express')
const router = express.Router()
const calculateController = require('../controllers/calculate')

router.post('/palindrome', calculateController.palindrome ) 
 

module.exports = router 