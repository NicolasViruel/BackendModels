const app = require('./app')

//controladores
const { test } = require('./controllers/testController')

//rutas
app.get('/test', test);



const PORT = process.env.PORT || 5051
app.get('/', (req, res) => {
res.send('Iniciando Conexion')
})
app.listen(PORT, function () {
console.log(`Data Base en puerto: ${PORT}!`); });