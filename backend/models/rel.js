const Agendamento=require('./Agendamento')
const Cliente=require('./Cliente')
const Console=require('./Console')

Cliente.hasMany(Console,{
    foreignKey:'idCliente',
    as:'ClienteConsole',
    onDelete:'CASCADE'
})
Console.belongsTo(Cliente,{
    foreignKey:'idCliente',
    as:'ConsoleCliente',
    allowNull:false
})

Console.hasMany(Agendamento,{
    foreignKey:'idConsole',
    as:'consoleAgendamento',
    onDelete:'CASCADE'
})
Agendamento.belongsTo(Console,{
    foreignKey:'idConsole',
    as:'agendamentoConsole',
    allowNull:false
})

Cliente.hasMany(Agendamento,{
  foreignKey:'idCliente',
    as:'clienteAgendamento',
    onDelete:'CASCADE'
})

Agendamento.belongsTo(Cliente,{
 foreignKey:'idCliente',
    as:'agendamentoCliente',
    allowNull:false
})
module.exports={Cliente,Agendamento,Console}