const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ClientSchema = new Schema({
    Nom: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Prenom: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
    Email: {
        type: String,
        unique:true,
        required: [true, 'Ce champs est obligatoire'],
    },
    Password: {
        type: String,
        required: [true, 'Ce champs est obligatoire'],
    },
  
    Role: {
        type: String,
        default: 'CLIENT',
    },


}, { timestamps: true, versionKey: false })
module.exports = mongoose.model('Client', ClientSchema)