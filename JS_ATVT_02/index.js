const parametro1 = document.getElementById("num1");
const parametro2 = document.getElementById("num2");
const textField1 = document.getElementById("text1");
const textField2 = document.getElementById("text2");
const dateField = document.getElementById("date1");
const selectGenre = document.getElementById("genre");

const button1 = document.getElementById("buttonVerifyNumber");
button1.addEventListener("click", () => {
  if (parametro1.value === "" || parametro2.value === "") {
    document.getElementById(
      "display"
    ).innerHTML += `<div>É obrigatório preencher os dois campos</div>`;
  } else {
    document.getElementById("display").innerHTML += compareNumber(
      Number(parametro1.value),
      Number(parametro2.value)
    );
  }
});

const button2 = document.getElementById("buttonVerifySize");
button2.addEventListener("click", () => {
  if (textField1.value === "" || textField2.value === "") {
    document.getElementById(
      "display"
    ).innerHTML += `<div>É obrigatório preencher os dois campos</div>`;
  } else {
    document.getElementById("display").innerHTML += compareSize(
      textField1.value,
      textField2.value
    );
  }
});

const button3 = document.getElementById("buttonVerifyDie");
button3.addEventListener("click", () => {
  if (dateField.value) {
    console.log(dateField.value, selectGenre.value);
    document.getElementById("display").innerHTML += verifyDie(
      dateField.value,
      selectGenre.value
    );
  } else {
    document.getElementById(
      "display"
    ).innerHTML += `<div>Selecione sua data de nascimento</div>`;
  }
});

function compareNumber(num1, num2) {
  if (num1 < num2) {
    return `<div> resultado: ${num1} < ${num2}</div> `;
  }
  if (num1 === num2) {
    return `<div> resultado: ${num1} = ${num2} </div>`;
  }
  if (num1 > num2) {
    return `<div>resultado: ${num1} > ${num2}</div>`;
  }
}

function compareSize(word1, word2) {
  const sizeWord1 = word1.length;
  const sizeWord2 = word2.length;
  const resultword = compareNumber(sizeWord1, sizeWord2);
  return resultword;
}

function verifyDeath(_birthDate, genre) {
  const birthDate = new Date(_birthDate);
  const presentDate = new Date();
  const interval = presentDate.getTime() - birthDate.getTime();
  const intervalDays = parseInt(interval / (1000 * 3600 * 24), 10);
  const intervalYear = intervalDays / 365;
  let daysLeft = 0;
  switch (genre) {
    case "Feminino":
      daysLeft = parseInt((80.1 - intervalYear) * 365, 10);
      break;
    case "Masculino":
      daysLeft = parseInt((73.1 - intervalYear) * 365, 10);
      break;
  }
  console.log(daysLeft);
  return `<div>Faltam ${daysLeft} dias para a sua morte...</div>`;
}
