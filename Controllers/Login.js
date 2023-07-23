const Client=require('../Models/Client');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
require('dotenv').config();



exports.login=async(req,res)=>{
        try {
           data=req.body;
           client=await Client.findOne({Email:data.Email})
            if(client){
              valpassword=bcrypt.compareSync(data.Password,client.Password)
              if (valpassword) {
    
              
                const data = {
                  idClient: client._id
              }
              const token = jwt.sign(data, 'Secret', { expiresIn: '1d' })
    
              res.status(200).send({mytoken:token})
    
    
    
              }else{
                res.status(401).send('email or password invalid')
              }
            }else{
                res.status(404).send('email or password incorrect')
            }
            
        } catch (error) {
            res.status(400).send(error)
        }
    }
