const express=require('express')
const router=express.Router()
const passport = require('passport')
const {addClient,getallClient,getByIdClient,updateClient,deleteClient }=require('../Controllers/Client')


//CRUD CLIENTS
router.post('/client',passport.authenticate('bearer', { session: false }),addClient)
router.get('/client/',passport.authenticate('bearer', { session: false }),getallClient)
router.get('/client/:id',passport.authenticate('bearer', { session: false }),getByIdClient)
router.delete('/client/:id',passport.authenticate('bearer', { session: false }),deleteClient)
router.put('/client/:id',passport.authenticate('bearer', { session: false }),updateClient)





module.exports=router