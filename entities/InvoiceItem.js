const Sequelize = require('sequelize');
const config = require('config');



let sequelize = new Sequelize(config.get('database.uri'));


const InvoiceItem = sequelize.define('invoice_items', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  invoice_id: {
    type: Sequelize.INTEGER
  },
  product_id: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.DECIMAL
  }
});

module.exports = InvoiceItem;
