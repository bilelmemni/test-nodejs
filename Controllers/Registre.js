const Client=require('../Models/Client');
const bcrypt=require('bcrypt');
require('dotenv').config();

exports.register=async(req,res)=>{
    try {
        data=req.body;
        client= new Client(data);
        salt=bcrypt.genSaltSync(10)
        client.Password=bcrypt.hashSync(data.Password,salt)
        saveclient= await client.save()
        res.status(200).send(saveclient)
       
    } catch (error) {
        res.status(400).send(error)
    }
}
