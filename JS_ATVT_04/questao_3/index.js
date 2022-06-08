const valor = document.querySelector("#valor");
const bttn = document.querySelector("#bttn");
const result = document.querySelector("#result");

bttn.addEventListener("click", calcInt);

function calcInt() {
    const valorFloat = parseFloat(valor.value);
    const resultFloor = Math.floor(valorFloat);
    const resultCeil  = Math.ceil(valorFloat);

    result.innerHTML = "Números inteiros próximos: " + resultFloor + " e " + resultCeil; 

    if (isNaN(valor.value)) {
        result.innerHTML = "Só trabalhamos com números!"   
    }
    
}