import React from 'react';

const Img = (props) => {
    console.log(props.imagen);
    const {} = props.imagen;
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">

            </div>
        </div>
    );
};

/*
function Img() {
    return()
}
*/

export default Img; 