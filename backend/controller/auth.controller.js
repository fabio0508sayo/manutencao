const Cliente = require('../models/Cliente')
const CryptoJS = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const login = async(req,res) =>{
        const valores = req.body

    if (!valores.email || !valores.senha) {
        return res.status(400).json({ message: 'Informe e-mail e senha para realizar o login!' })
    }
    try{
        const cliente = await  Cliente.findOne({where:{email:valores.email}})
         if (!cliente) {
            return res.status(404).json({ message: 'Ciclista não encontrado!' })
        }
        const bytes = CryptoJS.AES.encrypt(cliente.senha,CHAVE_SECRETA)
        console.log(bytes)
        const senhaDb=bytes.toString(CryptoJS.enc.Utf8)
        console.log(senhaDb)
            if (valores.senha !== senhaBD) {
            return res.status(401).json({ message: 'Senha incorreta!' })
        }
        const horas =1.5 * 60 * 60 * 1000
        const tempoExpiracao= Date.now()+ horas
        const payload={
              idCliente: cliente.codCliente,
            nome: cliente.nome,
            expiraEm: tempoExpiracao
        }
         const token = CryptoJS.AES.encrypt(JSON.stringify(payload), CHAVE_SECRETA).toString()

        return res.status(200).json({
            message: 'Login realizado com sucesso!',
            token: token,
            nome: ciclista.nome
        })
    }catch(error){
        console.error(error)
    }
}

module.exports = { login };