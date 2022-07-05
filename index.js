const express = require('express');
const routes = require('./routes');
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors');

//Conectar mongo
mongoose.Promise=global.Promise;
//mongoose.connect('mongodb://localhost/registrohoras',{useNewUrlParser:true})
mongoose.connect('mongodb+srv://myuser:gestoria@cluster0.i8re0.mongodb.net/?retryWrites=true&w=majority',{useNewUrlParser:true})

//Crear el servidor
const app = express();

//Habilitar body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors()); //Habilitar CORS

//Rutas de la App
app.use('/',routes());
//Puerto
app.listen(5000);