const app = require('./app')
//requerimos dotenv
require("dotenv").config()

//routers
const testRoutes = require("./router/test")


//rutas
app.use('/test', testRoutes);


const PORT = process.env.PORT || 3004
app.get('/', (req, res) => {
res.send('Iniciando Conexion')
})
app.listen(PORT, function () {
console.log(`Data Base en puerto: ${PORT}!`); });