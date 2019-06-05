import React from 'react';
import Imagen from './Imagen';
import './../css/App.css';

function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
      </div>
      <div className="row justify-content-center">
      </div>
      {/* ***** Componente: Imagen ***** */}
      <Imagen></Imagen>
    </div>
  );
}

export default App;
