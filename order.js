orders = []
currentOrderProducts = []

orderId = 0;


var showOrders = function(){

    document.querySelector('#divProduct').style.display = "none"
    document.querySelector('#divClient').style.display = "none"
    document.querySelector('#divOrders').style.display = "block"

    document.querySelector('#clientList').length = 0;
    document.querySelector('#productList').length = 0;

    currentOrderProducts = [];

    loadClientSelect();

    loadProductSelect();
}


var addProductToOrder = function() {

    var productSelect = document.querySelector('#productList');

    var clientId = document.querySelector('#clientList').value
    var productId = productSelect.value
    var quantity = document.querySelector('#productQuantity')
    
    var product = products.find((p) => p.id == productId)

    currentOrderProducts.push({
        client: clientId,
        product: productId,
        productName: productSelect.options[productSelect.selectedIndex].text,   
        pricePerItem: product.price,
        quantity: quantity.value,
        price: quantity.value * product.price
    })

    quantity.value = ''
    alert('Pedido Feito')
}

var closeOrder = function() {

    var clientSelect = document.querySelector('#clientList')
    
    var clientName = clientSelect.options[clientSelect.selectedIndex].text;    

    orders.push({
        orderId: ++orderId,
        clientName: clientName,
        items: currentOrderProducts
    })
    
    buildOrderTable(clientName);

    currentOrderProducts = []
}


function buildOrderTable(clientName) {
    var ordersTable = document.querySelector('#tblOrders');

    var saleTotalPrice = 0;

    for (let orderProductindex = 0; orderProductindex < currentOrderProducts.length; orderProductindex++) {
        var row = ordersTable.insertRow();

        var td = row.insertCell();
        td.appendChild(document.createTextNode(orderId));

        var td = row.insertCell();
        td.appendChild(document.createTextNode(clientName));

        var td = row.insertCell();
        td.appendChild(document.createTextNode(currentOrderProducts[orderProductindex].productName));

        td = row.insertCell();
        td.appendChild(document.createTextNode(currentOrderProducts[orderProductindex].quantity));

        td = row.insertCell();
        td.appendChild(document.createTextNode(currentOrderProducts[orderProductindex].price));

        saleTotalPrice += currentOrderProducts[orderProductindex].price;
    }

    var row = ordersTable.insertRow();
    td = row.insertCell();
    td.appendChild(document.createTextNode(`Valor Total Pedido: ${saleTotalPrice}`));
}

function loadProductSelect() {
    var productSelect = document.querySelector('#productList');

    productSelect.options[productSelect.options.length] = new Option('Selecionar produto', '');

         
    for (let index = 0; index < products.length; index++) {
        productSelect.options[productSelect.options.length] = new Option(products[index].name, products[index].id);
    }
   
}



function loadClientSelect() {
    var clientSelect = document.querySelector('#clientList');

    clientSelect.options[clientSelect.options.length] = new Option('Selecionar cliente', '');

    for (let index = 0; index < clients.length; index++) {
        clientSelect.options[clientSelect.options.length] = new Option(clients[index].name, clients[index].id);
    }
}

