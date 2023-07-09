const express=require('express')
const router=express.Router()
const passport = require('passport')
const{createCommande,Listcommande,detailscommande}=require('../Controllers/commande')


// API commande , liste commande et detaid commande
router.post('/Commande',passport.authenticate('bearer', { session: false }),createCommande)
router.get('/Commande/',passport.authenticate('bearer', { session: false }),Listcommande)
router.get('/Commande/:id',passport.authenticate('bearer', { session: false }),detailscommande)






module.exports=router