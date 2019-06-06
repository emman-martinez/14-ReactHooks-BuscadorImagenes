import React from 'react';

const Error = (props) => (
    <p className="my-3 p-4 text-center text-white alert alert-danger">{props.mensaje}</p>
)

export default Error;