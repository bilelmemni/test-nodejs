
const Commande = require('../Models/Commande');
const Produit = require('../Models/Produit');


// API pour passer une commande et Diminuer les quantite des produits
exports.createCommande = async (req, res) => {
  try {
    const { totalPrix, produits, clientId } = req.body;
    const CommandeProduits = await Produit.find({ _id: { $in: produits } });
    if (CommandeProduits.length !== produits.length) {
      res.status(400).json({ error: 'Invalid Produits' });
      return;
    }
    const commande = await Commande.create({ totalPrix, produits, client: clientId });
  
    for (const Produit of CommandeProduits) {
      Produit.Quantite -= 1;
      await Produit.save();
    }
    res.status(201).json(commande);
  } catch (error) {
    res.status(500).json({ error: ' server error' });
  }
};
// API pour  la liste des commandes
exports.Listcommande = async (req, res) => {
  try {
    const Commandes = await Commande.find().populate('produits').populate('client');
    res.json(Commandes);
  } catch (error) { 
    res.status(500).json({ error: ' server error' });
  }
};
// API pour  les details d'une commande
exports.detailscommande = async (req, res) => {
  try {
    const commande = await Commande.findById(req.params.id).populate('produits').populate('client');
    if (commande) {
      res.json(commande);
    } else {
      res.status(404).json({ error: 'Commande not found' });
    }
  } catch (error) {
    res.status(500).json({ error: ' server  error' });
  }
};


