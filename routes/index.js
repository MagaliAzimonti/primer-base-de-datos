const Contenedor = require('../components/products/index');
let archivo = new Contenedor('productos.json');
let chat = new Contenedor("chat.json")

module.exports = app => {
    

    app.get('/products', async (req, res, next) => {
        const products = await archivo.getAll();
        res.render('prods', {products})
    })
    
    app.get('/', (req, res, next) => {
        res.render('formulario', {})
    }) 
    
    app.post('/products', async (req, res, next) => {
        const addProd = req.body;
        await archivo.save(addProd);
        res.redirect('/')
    })   

}