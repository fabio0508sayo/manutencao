const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Console = db.define('console', {
    codConsole: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    marca: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    numSerie: {
        type: DataTypes.STRING(),
        allowNull: false
    },
    tipo:{
        type:DataTypes.STRING(),
        allowNull:false
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'codCliente'
        }
    }
}, {
    timestamps: false,
    tableName: 'consoles'
})

module.exports = Console