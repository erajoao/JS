const num = document.querySelector("#num");

bttn.addEventListener("click", () => {
    if(num.value === ""){
        document.getElementById("valor").innerHTML = `Preencha com um valor`;
    }

    else{
        document.getElementById("valor").innerHTML = write(num.value);
    }
});

function write(a){

    a = Number(a);
    let writing = "";

    switch (a){
        case 0:
            writing="Zero";
            break;
        case 1:
            writing="Um";
            break;
        case 2: 
        writing="Dois";
            break;
        case 3:
            writing="Três";
            break;
        case 4:
            writing="Quatro";
            break;
        case 5:
            writing="Cinco";
            break;
        case 6:
            writing="Seis";
            break;
        case 7:
            writing="Sete";
            break;
        case 8:
            writing="Oito";
            break;
        case 9:
            writing="Nove";
            break;
        case 10:
            writing="Dez";
            break;
        default:
            writing="Valor não suportado."
            break;
    }

    return `${writing}`

}
