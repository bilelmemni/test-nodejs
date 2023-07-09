const express=require('express')
const router=express.Router()
const passport = require('passport')
const{addproduit,getallproduit,getByIdproduit,deleteproduit,updateproduit}=require('../Controllers/prod')


//CRUD PRODUIT
router.post('/produit',passport.authenticate('bearer', { session: false }),addproduit)
router.get('/produit/',passport.authenticate('bearer', { session: false }),getallproduit)
router.get('/produit/:id',passport.authenticate('bearer', { session: false }),getByIdproduit)
router.delete('/produit/:id',passport.authenticate('bearer', { session: false }),deleteproduit)
router.put('/produit/:id',passport.authenticate('bearer', { session: false }),updateproduit)





module.exports=router