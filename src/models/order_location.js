module.exports = function (sequelize, DataTypes) {
    return sequelize.define('order_location', {


        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        location: {
            type: DataTypes.STRING(200)
        },
        latitude: {
            type: DataTypes.STRING(200)
        },
        longitude: {
            type: DataTypes.STRING(200)
        },
        created_date: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },



    },
        {
            tableName: 'order_location'
        });
}