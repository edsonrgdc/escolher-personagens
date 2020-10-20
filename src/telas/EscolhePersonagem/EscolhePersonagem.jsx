import React from 'react'

function Select({ nome }) {
    return <div>
        <h1>Selecionar Personagem</h1> {nome}
    </div>
}

function Paises() {
    const locais = ['Japan', 'Japan', 'Brazil', 'U.S.A', 'U.S.A', 'U.S.S.R'
    ]
    return <p>{locais}</p>
}

function Personagens() {
    const personagens = ['Ken', 'Ryu']

    return <div>{personagens}</div>
}

function Players() {
   const lutadores = ['P1', 'P2']

    return <div>{lutadores}</div>
}

function EscolhePersonagem({ nome }) {

    return <div>
        <Select nome={nome} />
        <Paises />
        <Personagens />
        <Players />
    </div>
}

export default EscolhePersonagem