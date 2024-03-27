clients = []

var addClient = function(){

  var clientId = document.querySelector('#clientId');
  var clientName = document.querySelector('#clientName');

  var client = {
    id: clientId.value,
    name: clientName.value
  } 
  clients.push(client)

  clientId.value = ''
  clientName.value = ''
  alert('Cliente Cadastrado')
}

var showClient = function() {
  document.querySelector('#divProduct').style.display = "none"
  document.querySelector('#divClient').style.display = "block"
  document.querySelector('#divOrders').style.display = "none"
}

