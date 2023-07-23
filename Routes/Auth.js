const express=require('express')
const router=express.Router()
const passport = require('passport')
const {login}=require('../Controllers/Login')
const {register}=require('../Controllers/Registre')



// REGISTRE AND LOGIN
router.post('/registre',register)
router.post('/login',login)
router.get('/profile', passport.authenticate('bearer', { session: false }), (req, res) => {
    res.send(req.user)
})





module.exports=router