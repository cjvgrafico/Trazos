function calcular() {
  //las funciones tienen nombres que inventamos. habitualmente verbos.//

  console.log("dentro...");

  const altura = document.querySelector("#altura").value;

  const peso = document.querySelector("#peso").value;

  const sexo = document.querySelector("#sexo").value;

  let respuesta = document.querySelector("#respuesta");

  if (altura == "" || peso == "" || sexo == "") {
    respuesta.innerHTML = "Debe de completar todos los campos";
  } else {
    let imc = peso / (altura * altura);
    imc = imc.toFixed(2);
    console.log(imc);
    if (sexo == "m") {
      if (imc < 18.5) {
        respuesta.innerHTML =
          "su imc es" +
          imc +
          "<span class='resultado'> peso inferior al normal </span>";
      } else if (imc >= 18.5 && imc <= 24.9) {
        respuesta.innerHTML = "su imc es" + imc + " peso normal";
      } else if (imc >= 25 && imc <= 29.9) {
        respuesta.innerHTML = "su imc es" + imc + " peso superior al normal";
      } else {
        respuesta.innerHTML = "su imc es" + imc + " obesidad";
      }
    }
    if (sexo == "h") {
      if (imc < 18.5) {
        respuesta.innerHTML = "su imc es" + imc + " peso inferior al normal";
      } else if (imc >= 20 && imc <= 24.9) {
        respuesta.innerHTML = "su imc es" + imc + " peso normal";
      } else if (imc >= 25 && imc <= 29.9) {
        respuesta.innerHTML = "su imc es" + imc + " peso superior al normal";
      } else {
        respuesta.innerHTML = "su imc es" + imc + " obesidad";
      }
    }
  }
}
