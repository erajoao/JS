
const select = document.querySelector("#produto");

button.addEventListener("click", () => {

    document.getElementById("valor").innerHTML = extenso(select.value);

});

function extenso(op){

    let exibe = "";

    switch (op){
        case "vazio":
            exibe = "Você não selecionou um produto"
            break;
        case "monitor":
            exibe = "<img src=img/monitor.jpg />"
            break;
        case "mouse":
            exibe = "<img src=img/mouse.jpg />"
            break;
        case "teclado":
            exibe = "<img src=img/teclado.jpg />"
            break;
        default:
            exibe = "<img src=img/torta.png />"
            break;
    }

    return `${exibe}`

}