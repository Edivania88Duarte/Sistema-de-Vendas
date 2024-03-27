products = []

var addProduct = function(){
    
    var productId = document.querySelector('#productId')
    var productName = document.querySelector('#productName')
    var productPrice = document.querySelector('#productPrice')

    var product = {
        id: productId.value,
        name: productName.value,
        price: productPrice.value
    }

    products.push(product)

    productId.value = ''
    productName.value = ''
    productPrice.value = ''
    alert('Produto Cadastrado')
}

var showProduct = function() {
    document.querySelector('#divProduct').style.display = "block"
    document.querySelector('#divClient').style.display = "none"
    document.querySelector('#divOrders').style.display = "none"
}