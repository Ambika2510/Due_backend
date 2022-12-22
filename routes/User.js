const express = require('express')
const { loginUser, signupUser, updatePassword } = require('../controller/Usercontroller')
const router = express.Router()
    //login route
router.post('/login', loginUser)
    //signup route
router.post('/signup', signupUser)
router.patch('/updatePassword', updatePassword)
module.exports = router