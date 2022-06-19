// Crie uma página web que peça ao usuário que preencha 5 dados de usuário (‘Nome’, ’Data de Nascimento’, ’Peso’, ’Altura’ e ‘Gênero’) por meio de um formulário, sendo armazenado em um objeto JavaScript ‘user’ após clique de um botão, de forma que: 

// O campo do ‘Nome’ é do tipo string e será armazenado no formato string;
// A ‘Data de Nascimento’ deve ser inserida pelo usuário através de 3 campos (‘dia’, ‘mês’ e ‘ano’) de forma que a seleção não pode ser de data inexistente ou superior à data atual, sendo armazenada no formato Date;
// O ‘Peso’ e ‘Altura’ embora seja inserido no formato string deve ser armazenado no formato numérico, de forma que o peso (kg) é numérico de ponto flutuante e a altura (cm) em um numérico inteiro;
// O ‘Gênero’ deve ser capturado por meio de um campo do tipo select e armazenado em formato string;
// O objeto Javascript deve conter os seguintes atributos:
// name: que armazenará o nome do usuário (formato string);
// birthDate: que armazenará a data de nascimento (formato Date);
// weight: que armazenará o peso em quilogramas (formato numérico float);
// height: que armazenará a altura em centímetros (formato numérico int);
// gender: que armazenará o gênero (formato string).

const name = document.querySelector("#name");
const day = document.querySelector("#dateDay");
const month = document.querySelector("#dateMonth");
const year = document.querySelector("#dateYear");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const gender = document.querySelector ("#genderId");

let button = document.querySelector("#bttn");

button.addEventListener("click", () => {

    // document.getElementById("valor").innerHTML = retorno(constante.value);

    const form = {
        name: name.value, 
        birthDate: day.value + "/" + month.value + "/" + year.value,
        weight: weight.value,
        height: height.value,
        gender: gender.value,
    }
    console.log(form)
    if (form.name && form.name.length >= 5) {
        console.log(1)
    }
    else {
        
    }
});

