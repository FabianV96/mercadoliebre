const express = require ('express');
// const { resolve } = require('path');
const path = require('path');
/* Modulo nativo que sirve para generar rutas absolutas de una manera mucho mas comoda para express */
const app = express();
const puerto = process.env.PORT || 3050;

// const publicPath = path.resolve(__dirname, 'public');

app.use(express.static('public'));

app.listen( puerto, () => {
    console.log('Servidor activo')
});


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html')) 
}) 
/* Usamos el metodo "sendfile" para recibir una ruta absoluta, que la obtenemos usando el modulo "path" con su metodo
 resolve, lo que hacemos dentro del metodo resolve es, poner la variable dirname (que es la ubicacion en la cual me 
    encuentro y concatenarla con la ubicacion al archivo al cual quiero ir) */

/* app.get('/', (req, res) => {
    res.send('Bienvenidos al sitio')
})   Lo que le pedimos a "express", que tiene un pedido por GET, en la ruta " / " (la ruta raiz) y la consecuencia 
de hacer eso, en este caso es 'Bienvenidos al sitio' */
 

app.get('/contacto', (req, res) => {
    res.send('Dejanos tu contacto')
})

