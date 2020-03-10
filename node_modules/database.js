const Product = sequelize.define('Product', {
    id: Sequelize.STRING,
    name: Sequelize.STRING,
    detail: Sequelize.STRING,
    price:Sequelize.FLOAT,
    openSale:Sequelize.DATE,
    endSale:Sequelize.DATE
  },{
    classMethods: {
      associate: function(models) {
        Product.hasMany(DetailPromotion, { foreignKey: 'idProduct' })
        Product.hasMany(Sale, { foreignKey: 'idPro' })
      }
    }
  })

  const Promotion = sequelize.define('Promotion', {
    id: Sequelize.STRING,
    name: Sequelize.STRING,
    price:Sequelize.FLOAT,
    openSale:Sequelize.DATE,
    endSale:Sequelize.DATE
  },{
    classMethods: {
      associate: function(models) {
        Promotion.hasMany(DetailPromotion, { foreignKey: 'idPromotion' })
        Promotion.hasMany(Sale, { foreignKey: 'idPro' })
      }
    }
  })

  const DetailPromotion = sequelize.define('DetailPromotion', {
    id: Sequelize.STRING,
    idPromotion: Sequelize.STRING,
    idProduct:Sequelize.STRING,
  },{
    classMethods: {
      associate: function(models) {
        DetailPromotion.belongsTo(Product, { foreignKey: 'idProduct' })
        DetailPromotion.belongsTo(Promotion, { foreignKey: 'idPromotion' })
      }
    }
  })

  const Sale = sequelize.define('Sale', {
    id: Sequelize.STRING,
    idPro: Sequelize.STRING,
    code:Sequelize.STRING,
    active: Sequelize.INTEGER,

  },{
    classMethods: {
      associate: function(models) {
        Sale.belongsTo(Product, { foreignKey: 'idPro' })
        Sale.belongsTo(Promotion, { foreignKey: 'idPro' })
      }
    }
  })
