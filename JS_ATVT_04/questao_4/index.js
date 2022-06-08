button.addEventListener("click", () => {
    document.getElementById("resultado").innerHTML = mulher_homem();
});

function mulher_homem(){

    const num1 = Math.random() * 100;
    
    
    let genero = "";
    let idade = "";

    if(num1 <= 51.7){
        
        genero = "mulher"
    }
    else{
        
        genero = "homem"
    }
    
    const num2 = Math.random() * 100;
    

    if(num2 <= 16.7){
        
        idade = "com idade igual ou superior a 60 anos."
    }
    else{
       
        idade = "não idoso(a)"
    }
    return `Essa pessoa é: ${genero}, ${idade}`;
}