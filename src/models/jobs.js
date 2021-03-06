module.exports = function (sequelize, DataTypes) {
    return sequelize.define('jobs', {


        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(45)
        },
        designation: {
            type: DataTypes.STRING(45)
        },
        description: {
            type: DataTypes.STRING(200)
        },
        expereince: {
            type: DataTypes.STRING(45)
        },
        salary: {
            type: DataTypes.STRING(45)
        },
        ads_picture:{
            type: DataTypes.STRING(45)

        },
        skill:{
            type: DataTypes.STRING(500)
        },
        technical_description:{
            type: DataTypes.STRING(500)
        }
       
    },
        {
            tableName: 'jobs'
        });
}