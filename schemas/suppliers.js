const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('suppliers', {
    supr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    supr_name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    supr_contact_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    supr_city: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'suppliers',
    schema: 'sales',
    timestamps: false,
    indexes: [
      {
        name: "suppliers_pkey",
        unique: true,
        fields: [
          { name: "supr_id" },
        ]
      },
    ]
  });
};
