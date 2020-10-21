import React from 'react'

function Campeao({ p1, personagemSelecionado }) {
    return <div>
        <h2>{p1 ? "p1" : "p2"}</h2>
        <h3>{personagemSelecionado.nome}</h3>
        <img src={personagemSelecionado.imagem} alt={`imagem de um personagem chamado ${personagemSelecionado.nome}`} />
    </div>
}

export default Campeao 