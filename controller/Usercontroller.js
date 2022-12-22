const User = require('../models/Usermodel');
require('dotenv').config();
const jwt = require('jsonwebtoken')
    //JWT
const createToken = (_id) => {
        return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
    }
    //loginUser
const loginUser = async(req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.login(email, password)
            const token = createToken(user._id)

            res.status(200).json({ email, token })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
    //signupUser
const signupUser = async(req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.signup(email, password)
            const token = createToken(user._id)

            res.status(200).json({ email, token })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
    //updatePassword
const updatePassword = async(req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.updatePassword(email, password)
        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
module.exports = { loginUser, signupUser, updatePassword }