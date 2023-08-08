const Sequelize = require("sequelize")

module.exports = (sequelize) => {
    return sequelize.define('cart', {
        cart_id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.BIGINT,
            allowNull: false 
        },
        product_id: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        variant_id: {
            type: Sequelize.BIGINT,
            allowNull: false
        },
        quantity:{
            type: Sequelize.BIGINT,
            allowNull: false
        },
        created_at: {
            type: Sequelize.DATE,
        },
        updated_at: {
            type: Sequelize.DATE,
        }
    }, {
        collate: 'utf8mb4_unicode_ci',
        timestamps: false
    })
}
