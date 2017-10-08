const Sequelize = require('sequelize');
const config = require('config');



let sequelize = new Sequelize(config.get('database.uri'));


const Customer = sequelize.define('customers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  phone: {
    type: Sequelize.STRING
  }
});



sequelize.sync().then(function() {
  Customer.create({
    name: "Mark Benson",
    address: "353 Rochester St, Rialto FL 43250",
    phone: "555-534-2342"
  });

  Customer.create({
    name: "Bob Smith",
    address: "215 Market St, Dansville CA 94325",
    phone: "555-534-2342"
  });

  Customer.create({
    name: "John Draper",
    address: "890 Main St, Fontana IL 31450",
    phone: "555-534-2342"
  });
}).catch(function(e) {
  console.log("ERROR SYNCING WITH DB", e);
});

module.exports = Customer;
