let dataProv = document.getElementById("lbl-pcia"),
  dataCapi = document.getElementById("lbl-cap"),
  dataSup = document.getElementById("lbl-sup"),
  dataHab = document.getElementById("lbl-hab"),
  dataLoc = document.getElementById("lbl-loc"),
  dataGob = document.getElementById("lbl-gob"),
  boton = document.getElementById("button-1"),
  tablaBody = document.getElementById("table-body"),
  ventModal = document.getElementById('exampleModal'),
  contModal = document.getElementById('contenido-modal');


boton.addEventListener('click', function () {
  console.log('Ejecutando Funcion')
  let array = [dataProv, dataCapi, dataSup, dataHab, dataLoc, dataGob]
  let fila = document.createElement('tr')

  for (let index = 0; index < array.length; index++) {
    if (array[index].value == '' || array[index].value == ' ') {
      console.log('VACIO')
      return contModal.textContent= 'Tenes un campo vacio, intentalo otra vez.'     
    } else {
      let celda = document.createElement('td')
      celda.textContent = array[index].value;
      celda.style.textTransform = 'capitalize';
      fila.appendChild(celda)
    }
  }
  tablaBody.appendChild(fila)
  return contModal.innerHTML = `Se agrego exitosamente una provincia. <br> <b>¡OBSERVA LA TABLA OTRA VEZ!</b>`
})

