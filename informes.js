/*
  ACTIVIDAD UT5.1 - GENERACIÓN DE INFORMES
  Completa este archivo con tus propias funciones.

  1. Haz que los botones del menú muestren su apartado correspondiente.
  2. Informe estático: define en JavaScript el nombre del alumno,
     las asignaturas del ciclo y sus notas finales.
  3. Calcula la media y muestra un informe en #contenido-informe.
  4. Informe dinámico: recoge el nombre y las notas del formulario,
     calcula la media y muestra el informe en el mismo lugar.
  5. Comprueba que el botón de impresión funciona correctamente.

  Pista: puedes usar document.getElementById(), .value y .textContent.
  Si necesitas crear una tabla, puedes construir sus elementos desde JS.
*/


let nombre = "Andrii Kasian";
let asignaturas = ["DesInt", "SiGeEm", "PDAM", "PrSePr", "ACDA", "DesWeb"];
let notas = [9, 9, 10, 10, 10, 10];

let boton = document.getElementById("seccion-estatico");
boton.addEventListener('click', function () {
   let header = document.getElementsByTagName("h1")[0];
   header.textContent = "Previsión de notas para 2º de DAM el alumno: "+nombre;

   let padreTable = document.getElementById("contenido-informe");
   


});