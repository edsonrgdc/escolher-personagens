import React from 'react'

function Paises({ paises }) {
    return paises.map((pais, index) => (
        <p key={index}>{pais.nome}</p>
    ))
}

export default Paises 