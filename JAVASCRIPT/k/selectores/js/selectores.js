console.log("hola");

document.getElementById("titular").innerText =
  "texto introducido desde java script";

document.getElementsByTagName("header")[0].className = "gris";

document.getElementsByTagName("nav")[0].className = "marron";

//es necesario poner el número para que fuincione. si fallas en la sintaxis, aunque sea u8na mayúscula no lo lee//

let enlaces = document.getElementsByTagName("a");
console.log(enlaces);
for (let i = 0; i < enlaces.length; i++) {
  //document,getElementsByTagName("a")[i].className = "enlace";
  enlaces[i].className = "enlace";
}

document.getElementsByClassName("col-4")[1].className = "col-4 gris";

//selector moderno

document.querySelector("#seccion2").className = "contenedor d-flex";

document.querySelectorAll("#seccion2 div")[0].classname = "col-6";

document.querySelectorAll("#seccion2 div")[0].classname = "col-6";

//FUNCIONES

function enviar() {
  console.log("dentro");

  const nombre = document.querySelector("#nombre").value;

  const apellido = document.querySelector("#apellido").value;

  const email = document.querySelector("#correo").value;

  const asunto = document.querySelector("#asunto").value;

  const mensaje = document.querySelector("#mensaje").value;

  let respuesta = document.querySelector("#respuesta");

  if (
    nombre == "" ||
    apellido == "" ||
    email == "" ||
    asunto == "" ||
    mensaje == ""
  ) {
    respuesta.innerText = "debe completar el campo!";
  } else {
    console.log("ya puede enviar su mensaje");

    document.querySelector("#formulario").submit();
  }
}
//== compara = asigna
