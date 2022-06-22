const product = document.getElementById("productname");
const valor = document.getElementById("valor");
const description = document.getElementById("description");
const tableList = document.getElementById("tableList");

const array = []

function incluirProduto() {
    const productName = product.value; //capturando valores de input
    const producPrice = valor.value;
    const productDescription = description.value;

    try {
        validation(productName, producPrice, productDescription) //executando a função

        array.push({ name: productName, price: producPrice, description: productDescription })
        
    }
    catch (err) {
        alert("Error: " + err + ".");

    }

}
function validation(name, value, description) { //criando a função

    if (typeof name !== "string") throw "O 'nome' não é uma string.";
    if (name === '') throw "Campo 'nome' está vazio.";
    if (isNaN(value)) throw "Campo 'valor' não é um número.";
    if (value === '') throw "Campo valor está vazio.";
    if (typeof description !== "string") throw "a 'descrição' não é uma string.";
    if (description === '') throw "Campo 'descrição' está vazio.";

}
function imprimir() {
    tableList.innerHTML = ""
    tableList.innerHTML =
        `<tr>
            <th>Produto</th>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Editar</th>
            <th>Deletar</th>
            </tr>`
    let dados = "";
    let cont = 0;
    while (cont < array.length) {
        dados +=
            `<tr id="${cont}">
            <td>${array[cont].name}</td>
            <td>${array[cont].price}</td>
            <td>${array[cont].description}</td>
            <td><img src="./img/editar.png" onclick="editarItem (${cont})"></td>
            <td><img src="./img/excluir.png" onclick="deletarItem (${cont})"></td>
            </tr>`
        cont++

    }
    tableList.innerHTML += dados;
}
function listarProduto () {
    imprimir()
}
function editarItem (item) {
    array[item].name = product.value
    array[item].price = valor.value
    array[item].description = description.value
    console.log (array[item])
    imprimir()
}
function deletarItem (item) {
    array[item]
    array.splice(item, 1);
    console.log (array[item])
    imprimir()
}
