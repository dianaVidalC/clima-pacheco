const mostrarCiudades = ciudades => {
  const listadoCiudades = [];
  //console.log(`Hola ${nombre}`);
  ciudades.forEach(ciudad=> {
    //console.log(ciudad.nombre);
    const htmlCiudad = `<h4>${ciudad.name}</h4>\n`
      `          <p data-id="2643743"><span>9</span>°<img src="http://openweathermap.org/img/w/09d.png" alt=""></p>\n`
  `          <p>${ciudad.descripcion}</p>`;
    listadoCiudades.push(htmlCiudad);
  });
  const contenedorCiudades = document.querySelector('.row.marketing');
  contenedorCiudades.innerHTML = listadoCiudades.join('');
}
export default mostrarCiudades();
