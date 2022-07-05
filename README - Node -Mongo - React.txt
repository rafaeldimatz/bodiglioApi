Parado en la carpeta ejecutar los siguientes comandos
npm init
npm install --save-express
npm install --save-dev nodemon
npm install --save mongoose

En package.json modificar
"scripts":{
	"start":"nodemon ./index.js"
}

Ejecutar el proyecto npm start

index.js
const express = require('express');
//Crear el servidor
const app = express();
//Puerto
app.listen(5000);

Luego hacer router

instalar cors
npm install --save cors
app.cors

Instalar https://sweetalert.js.org/guides/
npm install sweetalert2 --save En el front end
