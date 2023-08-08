const Sequelize = require("sequelize")

module.exports = (sequelize) => {
  return sequelize.define('user', {
    user_id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    last_name: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    phone_no: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    role:{
      type :Sequelize.ENUM(['admin','caustomer']),
      defaultValue: 'caustomer'
    },
    is_active: {
      type: Sequelize.INTEGER(4),
      allowNull: false // @to-do: defualtValue:1
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
