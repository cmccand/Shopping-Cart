var cartPage = {
  init:function() {
    cartPage.initStyling();
    cartPage.initEvents();
  },

  initStyling: function(){
    console.log('styling loaded correctly');
  },
  initEvents: function(){
    console.log('events loaded correctly');

  },

  addProduct: function (product, index, array) {
    var compiled = _.template(templates.product);
    $('section').append(compiled(product));

  },

  allProducts: function(productInfo) {
    productInfo.forEach(cartPage.addProduct);

  }




};

$(document).ready(function(){

  cartPage.init();


});
