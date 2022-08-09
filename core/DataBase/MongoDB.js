const moongose = require('mongoose');

//Dotenv
require('dotenv').config();

moongose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conexion a MongoDB exitosa');
}).catch(err => {
    console.log(err);
})