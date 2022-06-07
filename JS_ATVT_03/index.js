const num1 = document.getElementById("operando1");
const num2 = document.getElementById("operando2");
const operador = document.getElementById("operador");
const button = document.getElementById("button_calculus");

button.addEventListener("click", () => {
    if(num1.value === "" || num2.value === ""){
        document.getElementById("result").innerHTML = `Preencha os dois campos`;
        console.log("clicou com campos vazios");
    }
    else{
        document.getElementById("result").innerHTML = operation(num1.value, num2.value, operador.value);
    }
});

function operation(num1, num2, operador){
    const a = Number(num1);
    const b = Number(num2);

    console.log(a, b);

    let x = 0;
    
    console.log(x);

    if(operador === "soma"){
        x = a + b; 
    }
    if(operador === "subtracao"){
        x = a - b;
    }
    if(operador === "multiplicacao"){
        x = a * b;
    }
    if(operador === "divisao"){
        x = a/b ;
    }

    console.log(x);
    return `${x}`;
}






