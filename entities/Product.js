const Sequelize = require('sequelize');
const config = require('config');



let sequelize = new Sequelize(config.get('database.uri'));


const Product = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.DECIMAL
  }
});


sequelize.sync().then(function() {
  Product.create({
    name: "Parachute Pants",
    price: 29.99
  });

  Product.create({
    name: "Phone Holder",
    price: 9.99
  });

  Product.create({
    name: "Pet Rock",
    price: 5.99
  });

  Product.create({
    name: "Egg Timer",
    price: 15.99
  });

  Product.create({
    name: "Neon Green Hat",
    price: 21.99
  });

}).catch(function(e) {
  console.log("ERROR SYNCING WITH DB", e);
});

module.exports = Product;
