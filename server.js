const express=require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');


require('./config/connect');
require('./Middlrwere/Passport');

const app=express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({ secret: 'Secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', async (req, res) => {
 res.json({ message: 'REST API' });
});


app.use('/api', require('./Routes/Client'));
app.use('/api', require('./Routes/Produit'));
app.use('/api', require('./Routes/commande'));
app.use('/api', require('./Routes/Auth'));





app.listen(3000,()=>{
    console.log('server work !!');
})