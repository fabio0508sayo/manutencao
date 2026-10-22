const express = require('express')
const app = express()
const cors = require('cors')

const PORT = 3000
const hostname = 'localhost'

const conn = require('./db/conn')
const controllerCliente = require('./controller/cliente.controller')
const controllerConsole = require('./controller/console.controller')
const controllerAgendamento = require('./controller/agendamento.controller')
//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
//rotas
app.get('/', (req, res) => {
    res.status(200).json({ message: 'API PixelFix Rodando!' })
})

app.post('/cliente', controllerCliente.cadastrarCliente)
app.get('/clientes', controllerCliente.listarClientes)



app.post('/console', controllerConsole.cadastrarConsole)
app.post('/agendamento', controllerAgendamento.cadastrarAgendamento)
//server

conn.sync()
    .then(() => {
        app.listen(PORT, hostname, () => {
            console.log(`Servidor rodando em http://${hostname}:${PORT}`)
        })
    })
    .catch((err) => {
        console.error('Erro ao conectar com o banco de dados!', err)
    })