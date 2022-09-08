var randomValue = parseInt(Math.random() * 11);
var chance = 3;

function Chutar() {
  let number = parseInt(document.getElementById("valor").value);

  if (number >= 0 && number <= 10) {
    if (number == randomValue) {
      document.getElementById("resultado").innerHTML =
        "Parabens! Você acertou.";
      document.getElementById("valor").disabled = true;
      document.getElementById("chutar").disabled = true;
    } else if (chance != 1) {
      chance -= 1;
      document.getElementById("chance").innerHTML =
        "Digite um número de 0 a 10 - Você tem " + chance + " chances.";

      if (randomValue > number) {
        document.getElementById("resultado").innerHTML =
          "O número é maior do que você imagina";
      } else {
        document.getElementById("resultado").innerHTML =
          "O número é menor do que você imagina";
      }
    } else {
      document.getElementById("chance").innerHTML =
        "Digite um número de 0 a 10 - Você tem 0 chances.";
      document.getElementById("resultado").innerHTML =
        "Suas chances terminaram!";
      document.getElementById("valor").disabled = true;
      document.getElementById("chutar").disabled = true;
    }
  } else {
    document.getElementById("resultado").innerHTML =
      "Digite um número de 0 a 10!";
  }
  document.getElementById("valor").value = "";
}

function newGame() {
  chance = 3;
  randomValue = parseInt(Math.random() * 11);
  document.getElementById("valor").value = "";
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("chance").innerHTML =
    "Digite um número de 0 a 10 - Você tem 3 chances.";
  document.getElementById("valor").disabled = false;
  document.getElementById("chutar").disabled = false;
}
