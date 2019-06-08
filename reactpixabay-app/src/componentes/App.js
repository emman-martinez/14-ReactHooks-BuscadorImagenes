import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';
import ListadoImagenes from './ListadoImagenes';
import Imagen from './Imagen';
import './../css/App.css';

function App() {

  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ paginaActual, guardarPaginaActual ] = useState(1);
  const [ totalPaginas, guardarTotalPaginas ] = useState(1);

  // useEffect --> componentDidUpdate
  useEffect(() => {
    // *** Consultar API ***
    const consultarApi = async () => {

      if (busqueda === '') return;

      const imagenesPorPagina = 30;
      const key = '12688760-75a09efac77599a8b4bef78b4';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;
      
      const respuesta = await fetch(url);
      console.log(respuesta);
      
      const resultado = await respuesta.json();
      console.log(resultado);
      // Guardando imagenes en el state
      guardarImagenes(resultado.hits);

      // Calcular el total de páginas
      const { totalHits } = resultado;
      const numeroPaginas = Math.ceil(totalHits / imagenesPorPagina);
      guardarTotalPaginas(numeroPaginas);
      console.log(numeroPaginas);

      // Mover la pantalla hacia la parte superior
      const jumbotron = document.querySelector('.jumbotron');
      //                       'animación', 'dirección'
      jumbotron.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    consultarApi();

  }, [busqueda, paginaActual]);

  const paginaAnterior = () => {
    console.log('paginaAnterior');
    let nuevaPaginaActual = paginaActual - 1;
    // Colocarlo el state
    guardarPaginaActual(nuevaPaginaActual);
  }

  const paginaSiguiente = () => {
    console.log('paginaSiguiente');
    let nuevaPaginaActual = paginaActual + 1;
    // Colocarlo el state
    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        {/* ***** Componente: Buscador ***** */}
        <Buscador
                  guardarBusqueda={guardarBusqueda}
        ></Buscador>
      </div>
      <div className="row justify-content-center">
        {/* ***** Componente: ListadoImagenes ***** */}
        <ListadoImagenes
                          imagenes={imagenes}
        ></ListadoImagenes>

        { (paginaActual === 1) ? null : (
          <button onClick={paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &laquo;</button>
        ) }
        
        { (paginaActual === totalPaginas) ? null : (
          <button onClick={paginaSiguiente} type="button" className="btn btn-info">Siguiente &raquo;</button>
        ) }
        
      </div>
      {/* ***** Componente: Imagen ***** */}
      <Imagen></Imagen>
    </div>
  );
}

export default App;
