const Sequelize = require('sequelize');
const config = require('config');



let sequelize = new Sequelize(config.get('database.uri'));


const Invoice = sequelize.define('invoices', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  customer_id: {
    type: Sequelize.INTEGER
  },
  discount: {
    type: Sequelize.DECIMAL
  },
  total: {
    type: Sequelize.DECIMAL
  }
});


module.exports = Invoice;
