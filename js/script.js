let dataProv = document.getElementById("lbl-pcia"),
  dataCapi = document.getElementById("lbl-cap"),
  dataSup = document.getElementById("lbl-sup"),
  dataHab = document.getElementById("lbl-hab"),
  dataLoc = document.getElementById("lbl-loc"),
  dataGob = document.getElementById("lbl-gob"),
  boton = document.getElementById("button-1"),
  tablaBody = document.getElementById("table-body");
;

boton.addEventListener('click', function () {
  console.log('Ejecutando Funcion')
  let array = [dataProv, dataCapi, dataSup, dataHab, dataLoc, dataGob]
  let fila = document.createElement('tr')

  for (let index = 0; index < array.length; index++) {
    if (array[index].value == '') {
      console.log('VACIO')
      return alert('Tenes un campo vacio')
    } else {
      let celda = document.createElement('td')
      celda.textContent = array[index].value;
      celda.style.textTransform = 'capitalize';
      fila.appendChild(celda)
    }
  }
  alert('Se agrego exitosamente una provincia. ¡OBSERVA LA TABLA OTRA VEZ!');
  return tablaBody.appendChild(fila)
})