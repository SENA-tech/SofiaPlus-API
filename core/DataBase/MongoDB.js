const moongose = require('mongoose');

//Dotenv
require('dotenv').config();

moongose.connect('mongodb+srv://PintoGamer64:JoanCardozo15243@sofiaplus-api.vr43bjr.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conexion a MongoDB exitosa');
}).catch(err => {
    console.log(err);
})