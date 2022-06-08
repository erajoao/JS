const op1 = document.getElementById("person_weight");
const op2 = document.getElementById("person_height");
const button = document.getElementById("bttn");

button.addEventListener("click", () => {
    if(op1.value === "" || op2.value === ""){
        document.getElementById("result").innerHTML = `Preencha os dois campos`;
        console.log("clicou com campos vazios");
    }
    else {
        if (isNaN(op1.value) || isNaN(op2.value)) {
            document.getElementById("result").innerHTML = `Só trabalhamos com números`;
            console.log("Só trabalhamos com números");
        }
        else {
            document.getElementById("result").innerHTML = IMC(Number(op1.value),  Number(op2.value));
        }


    }
    
});
function IMC(op1,  op2) {
op2 = op2/100;
let valor =  op1/(op2*op2);
return `IMC = ${valor}`
}