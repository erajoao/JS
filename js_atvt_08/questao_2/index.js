
const name = document.querySelector("#name");
const day = document.querySelector("#dateDay");
const month = document.querySelector("#dateMonth");
const year = document.querySelector("#dateYear");
const weight = document.querySelector("#weight");
const height = document.querySelector("#height");
const gender = document.querySelector ("#genderId");

let button = document.querySelector("#bttn");

button.addEventListener("click", () => {

    const dateNow = Date.now();
    const date = new Date(Number(year.value), Number(month.value), Number(day.value));

    const form = {
        name: name.value, 
        birthDate: day.value + "/" + month.value + "/" + year.value,
        weight: Number(weight.value),
        height: Number(height.value),
        gender: gender.value,
    
    }
    try {
        if (form.name === '') throw "Field “name” is invalid!";
        if (form.name.length <= 5) throw "Field “name” is invalid!";
        console.log(date.getMonth(), month.value )
        if (Number(date.getUTCMonth()) !== Number(month.value)) throw "Field “birthDate1” is invalid!";
        if (Number(date.getUTCDate()) !== Number(day.value)) throw "Field “birthDate2” is invalid!";
        if (Number(date.getFullYear()) !== Number(year.value) +1) throw "Field “birthDate3” is invalid!";
        if (dateNow < date.getTime()) throw "Field “birthDate4” is invalid!";
        if (isNaN(form.weight)) throw "Field “weight” is invalid!";
        if (isNaN(form.height) && parseInt(form.height, 10)) throw "Field “height” is invalid!";
        if (form.gender !== "Masculino" && form.gender !== "Feminino" && form.gender !== "Outro") throw "Field “gender” is invalid!";
    }

    catch(err) {
        alert("Error: " + err + ".");
        
    }
    finally {
        console.log(form);
    }
    }
    );
