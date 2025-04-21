# <h1 align="center"> SISTEMA DE VENDAS 💻 </h1>

<h2 align="center">
  Global Vendas
  <p align="center">

<br>

![image](https://github.com/Edivania88Duarte/crud-main/assets/120994730/0050cefc-4ab5-4226-af7a-a8394688f778)

<br>



## <h2> 💻 PROJETO</h2>

O sistema consiste no gerenciamento de clientes, produtos e pedidos, permitindo cadastrar clientes, cadastrar produtos, fechar pedidos e visualizar as vendas.
<br>
<br> <h4>Passo 1 -	Cadastrar Cliente:</h4>
•	A função <b>addClient()</b> permite adicionar um novo cliente à lista de clientes. Ela obtém o ID e o nome do cliente dos elementos HTML correspondentes e os adiciona a um objeto cliente. Esse objeto é então inserido na lista de clientes, ou seja, neste campo, há um espaço para digitar o ID e o nome do cliente e ao clicar no botão <i>cadastrar</i>, o cliente é adicionado à lista de clientes.
<br>
<br> 
<h4>Passo 2 -	Cadastrar Produto:</h4>
•	A função <b>addProduct()</b> permite adicionar um novo produto à lista de produtos. Ela obtém o ID, o nome e o preço do produto dos elementos HTML correspondentes e os adiciona a um objeto produto. Esse objeto é então inserido na lista de produtos. É semelhante à adição de cliente, pois é possível cadastrar os produtos digitando seu ID, nome e preço. Após clicar no botão <i>cadastrar</i>, o produto é adicionado à lista de produtos.
<br>
<br> 
<h4>Passo 3 -	Cadastrar Pedido:</h4>
•	A função <b>addProductToOrder()</b> permite adicionar um produto ao pedido atual. Ela obtém o cliente selecionado e o produto escolhido junto com sua quantidade. Os detalhes do produto são buscados na lista de produtos e adicionados ao pedido atual, que é armazenado em uma lista separada, ou seja, o usuário, consegue selecionar um cliente, um produto, e inserir a quantidade desejada de cada produto. Após clicar no botão <i>Add Produto</i>, o produto é adicionado à lista de pedidos.
<br>
<br>
<h4>Passo 4 -	Fechar Pedido:</h4>
• A função <b>closeOrder()</b> finaliza o pedido atual. Ela obtém o cliente selecionado, cria uma entrada de pedido contendo todos os itens do pedido atual e o preço total, e adiciona essa entrada à lista de pedidos. Além disso, gera uma tabela mostrando os detalhes do pedido, ou seja, quando todos os produtos desejados forem adicionados à lista de pedidos, para o cliente que foi selecionado, é possível fechar a venda clicando no botão <i>Fechar Pedido</i> e ver informações como id do produto, nome do cliente, nome do produto, quantidade de produtos e preço. Ademais, ao adicionar mais clientes, produtos e suas respectivas quantidades, e ao clicar em <i>Fechar Pedido</i>, aparecerá a lista de todas as vendas consolidadas.

## 🚀 TECNOLOGIAS

- HTML
- CSS
- JavaScript

## 🛈  INFORMAÇÕES

Desenvolvi o projeto com as tecnologias <strong>HTML</strong>, <strong>CSS</strong> e <strong>JavaScript</strong>, possibilitando ao usuário, navegar de forma simples e intuitiva pelo sistema, realizando o cadastro dos clientes, dos produtos, das vendas e visualizando-as no final. Ao clicar no nome do sistema <u><i><b>(Global Vendas)</b></i></u>, volta-se à página inicial e pode-se iniciar novamente o fluxo. 

## 💡 EXPERIÊNCIA DO USUÁRIO

* O usuário pode cadastrar seus clientes inserindo Id e nome do cliente, ao clicar no botão <u><i><b>Cadastrar</b></i></u>;

* O usuário pode cadastrar seus produtos inserindo Id e nome do produto e preço, ao clicar no botão <u><i><b>Cadastrar</b></i></u>;

* O usuário pode selecionar um cliente cadastrado anteriormente, adicionar produtos ao pedido, informando a quantidade desejada. Ao clicar no botão <u><i><b>Add Pedido</b></i></u>, o produto é adicionado e o sistema calcula o valor total do pedido com base nos produtos adicioandos;

* O usuário pode visualizar suas vendas ao clicar no botão <u><i><b>Fechar Pedido</b></i></u>. Aparecerá o id do pedido, nome do cliente, nome do produto e o valor total de suas compras, baseado na quantidade de produtos que comprou.
