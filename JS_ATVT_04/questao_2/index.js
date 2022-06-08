const value1 = document.getElementById("min_value");
const value2 = document.getElementById("max_value");
const button = document.getElementById("bttn");

button.addEventListener("click", () => {
    if (value1.value === "" || value2.value === "") {
        document.getElementById("result").innerHTML = `Preencha os dois campos`;
        console.log("clicou com campos vazios");
    }
    else {

        if (parseInt(value1.value, 10) && parseInt(value2.value, 10)) {
            console.log("entrou...");

            if (Number(value1.value) < Number(value2.value)) {
                document.getElementById("result").innerHTML = numero_sorteado(Number(value1.value), Number(value2.value));
            }
            else {
                document.getElementById("result").innerHTML = `O valor mínimo precisa ser inferior ao máximo`;
                console.log("clicou com campos vazios");
            }
        }
        else {
            document.getElementById("result").innerHTML = `Só trabalhamos com números inteiros`;
            console.log("Só trabalhamos com números inteiros");
        }


    }
});
function numero_sorteado(value1, value2) {
    //const valor = Math.random() * (value1 - value2) + value1;
    const min = Math.ceil(value1);
    const max = Math.floor(value2);
    const valor = Math.floor(Math.random() * (max - min)) + min;
return `Número Sorteado: ${valor}`
}