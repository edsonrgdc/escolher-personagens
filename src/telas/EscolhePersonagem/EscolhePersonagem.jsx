import React from 'react'

import Titulo from '../../abas/Titulo'
import Campeao from '../../abas/Campeao'
import Personagens from '../../abas/Personagens'
import Paises from '../../abas/Paises'


const paises = [
    {
        nome: 'Brasil',
    },
    {
        nome: 'Japão'
    },
    {
        nome: 'Uruguai',
    },
    {
        nome: 'China'
    },
    {
        nome: 'Peru',
    },
    {
        nome: 'Croácia'
    }
]

const personagens = [
    {
        id: 1,
        nome: 'Ken',
    },
    {
        id: 2,
        nome: 'Ryu'
    }
]

const p1 = personagens[0]
const p2 = personagens[1]

function EscolhePersonagem() {
    return <div>
        <Titulo nome="Selecionar Personagem" />
        <Paises paises={paises} />
        <Personagens personagens={personagens} />
        <Campeao p1 personagemSelecionado={p1} />
        <Campeao personagemSelecionado={p2} />
    </div>
}
export default EscolhePersonagem