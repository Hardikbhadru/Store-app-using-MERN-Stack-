const Sequelize = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('product', {
    product_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(255),
    },
    quantity: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    image1:{
      type: Sequelize.BLOB(),
    },
    image2:{
      type: Sequelize.BLOB(),
    },
    image3:{
      type: Sequelize.BLOB(),
    },
    image4:{
      type: Sequelize.BLOB(),
    },
    image5:{
      type: Sequelize.BLOB(),
    },
    created_by: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    is_active: {
      type: Sequelize.INTEGER(4),
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
