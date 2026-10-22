const conn = require('./db/conn')

const{Agendamento, Cliente, Console}=require('./models/rel')

async function syncDataBase() {
    try{
        await conn.sync({force:true})
        console.log('Tabelas sincronizadas com sucesso')
    }catch(error){
        console.error(error)
    }finally{
        await conn.close()
        console.log('Fechando conexao com banco de dados')
    }
}
syncDataBase()