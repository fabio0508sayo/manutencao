//agora tem um arquivo só para o controller do cliente,para ficar mais organizado
const Cliente = require('../models/Cliente')

const cadastrarCliente = async (req, res) => {
    const valores = req.body
    try {
        await Cliente.create({
            nome: valores.nome,
            email: valores.email,
            senha: valores.senha, 
            cpf: valores.cpf,     
            endereco: valores.endereco
        })
        return res.status(201).json({ message: 'Cliente cadastrado com sucesso!' })
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao cadastrar cliente!' })
    }
}

const listarClientes = async (req, res) => {
    
    
    return res.status(500).json({ message: 'Função de listar não implementada!' })
}


module.exports = {
    cadastrarCliente,
    listarClientes,
   
}