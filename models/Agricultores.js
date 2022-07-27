const Agricultores = (sequelize, DataTypes) => {
    return sequelize.define('Agricultores', {
        razaosocial: DataTypes.STRING,
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        celular: DataTypes.STRING,
        estado: DataTypes.STRING,
        cidade:DataTypes.STRING,
    },{
        timestamps: false
    });
};

module.exports = Agricultores;