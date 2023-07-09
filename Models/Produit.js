const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProduitSchema = new Schema({
    Nom: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Description: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Quantite: {
        type: Number,
        required: [true, 'Ce champs est obligatoire'],
    },
    PrixDeVente: {
        type: Number,
        required: [true, 'Ce champs est obligatoire'],
    },
  
}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Produit', ProduitSchema)