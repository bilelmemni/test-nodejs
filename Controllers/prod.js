const Produit=require('../Models/Produit')


exports.addproduit=async(req,res)=>{ 
  try {
      data=req.body;
      produit= new Produit(data);
      saveproduit= await produit.save()
      res.status(200).send(saveproduit)
     
  } catch (error) {
      res.status(400).send(error)
  }
}

exports.getallproduit=async(req,res)=>{
    Produit.find()
  .then(
      (produits)=>{
        res.send(produits)
      }
  )
  .catch(
      (err)=>{
      console.log(err);
      }
  )
}
exports.getByIdproduit=async(req,res)=>{
  myid=req.params.id
  Produit.findOne({_id:myid})
  .then(
    (produit)=>{
        res.send(produit)
        
    }
  )
  .catch(
    (err)=>{ 
      res.send(err)
    }
  )

}

exports.deleteproduit=async(req,res)=>{
  myid=req.params.id
  Produit.findOneAndDelete({_id:myid})
  .then(
      (produit)=>{
        res.send(produit)
      }
  )
  .catch(
      (err)=>{
         res.send(err)
      }
  )

}
exports.updateproduit=async(req,res)=>{
  myid=req.params.id;
  newdata=req.body;
  Produit.findOneAndUpdate({_id:myid},newdata)
  .then(
      (produit)=>{
         res.send(produit)
      }
  )
  .catch(
      (err)=>{
          res.send(err)
      }
  )
}
