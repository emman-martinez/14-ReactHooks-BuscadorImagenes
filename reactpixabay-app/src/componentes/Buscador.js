import React, { useState } from 'react';
import Error from './Error';

function Buscador(props) {

    /* ***** Uso de Hooks ***** */
    const [terminoBusqueda, guardarTerminoBusqueda] = useState('');
    // console.log(terminoBusqueda);
    const [error, guardarError] = useState(false);

    const buscarImagen = e => {
        e.preventDefault();

        // Validar
        if(terminoBusqueda === '') {
            guardarError(true);
            return;
        }
        // Enviar el término hacia el componente principal
        guardarError(false);
        props.guardarBusqueda(terminoBusqueda);
    }

    return(
        <form action="" onSubmit={buscarImagen}>
            <div className="row">
                <div className="form-group col-md-8">
                    <input 
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, Ejemplo: Fútbol o Café"
                        onChange= { (e) => guardarTerminoBusqueda(e.target.value) }
                   />
                </div>
                <div className="form-group col-md-4">
                    <input 
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
            {/* ***** Componente: Error ***** */}
            { (error) ? <Error mensaje="Agrega un término de búsqueda"></Error> : null }
        </form>
    )
}

export default Buscador;