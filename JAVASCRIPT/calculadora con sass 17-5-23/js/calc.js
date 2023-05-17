function calcular() {
  console.log("hola, k tal");

  const bruto = document.querySelector("#bruto").value;

  const hijos = document.querySelector("#hijos").value;

  const contrato = document.querySelector("#contrato").value;

  const pagas = document.querySelector("#pagas").value;

  let campos_vacios = document.querySelector("#vacío");

  if (bruto == "") {
    campos_vacios.innerHTML = "Debe introducir el sueldo bruto anual";
  } else if (hijos == "") {
    campos_vacios.innerHTML = "Debe seleccionar el número de hijos";
  } else if (contrato == "") {
    campos_vacios.innerHTML = "Debe seleccionar el tipo de contrato";
  } else if (pagas == "") {
    campos_vacios.innerHTML = "Debe seleccionar el número de pagas";
  } else {
    campos_vacios.innerHTML = "";
    let neto = (bruto * hijos * contrato) / pagas;

    let retencion_hijos = bruto - bruto * hijos;
    let retencion_contrato = bruto - bruto * hijos;

    console.log(neto);
    neto = neto.toFixed(2);

    document.querySelector("#respuestaPagas").innerHTML = pagas;

    document.querySelector("#respuestaNeto").innerHTML = neto + " €";

    document.querySelector("#respuestaHijos").innerHTML =
      (retencion_hijos / pagas).toFixed(2) + " €";

    document.querySelector("#respuestaContrato").innerHTML =
      (retencion_contrato / pagas).toFixed(2) + " €";
  }
}
