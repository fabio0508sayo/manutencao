//middleware de autentificação movido do geral para este arquivo
const CryptoJs = require('crypto-js')
const CHAVE_SECRETA='segredo'

function authMiddleware(req,res,next){
    const token = req.headers['authorization']
    console.log(token)

    if(!token){
        return res.status(401).json({message:'Acesso negado'})
    }
    try{
        const bytes = CryptoJs.AES.decrypt(token,CHAVE_SECRETA)
        const dadosDescriptografados = bytes.toString(CryptoJS.enc.Utf8)
     if (!dadosDescriptografados) {
            return res.status(401).json({ message: 'Token inválido!' })
        }
        const  payload = JSON.parse(dadosDescriptografados)
        
        if (Date.now() > payload.expiraEm) {
            return res.status(401).json({ message: 'Sessão expirada! Faça login novamente.' })
        }
         req.usuario = payload
        next()
    }catch(error){
        console.error(error)
    }
}

module.exports = authMiddleware