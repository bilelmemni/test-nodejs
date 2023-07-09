const Client=require('../Models/Client')
const bcrypt=require('bcrypt');

exports.addClient=async(req,res)=>{
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

exports.getallClient=async(req,res)=>{
  Client.find()
  .then(
      (clients)=>{
        res.send(clients)
      }
  )
  .catch(
      (err)=>{
      console.log(err);
      }
  )
}
exports.getByIdClient=async(req,res)=>{
  myid=req.params.id
  Client.findOne({_id:myid})
  .then(
    (client)=>{
        res.send(client)
        
    }
  )
  .catch(
    (err)=>{ 
      res.send(err)
    }
  )

}

exports.deleteClient=async(req,res)=>{
  myid=req.params.id
  Client.findOneAndDelete({_id:myid})
  .then(
      (client)=>{
        res.send(client)
      }
  )
  .catch(
      (err)=>{
         res.send(err)
      }
  )

}
exports.updateClient=async(req,res)=>{
  myid=req.params.id;
  newdata=req.body;
  Client.findOneAndUpdate({_id:myid},newdata)
  .then(
      (client)=>{
         res.send(client)
      }
  )
  .catch(
      (err)=>{
          res.send(err)
      }
  )
}
