import React from 'react';
import Img from './Img';

const ListadoImagenes = (props) => {
    return(
        <div className="col-12 p-5 row">
            {props.imagenes.map(imagen => (
                /* ***** Componente: Img ***** */
                <Img
                    key={imagen.id}
                    imagen={imagen}
                ></Img>
            ))}
        </div>
    );
}

/* 
function ListadoImagenes() {
    return()
}
*/

export default ListadoImagenes;