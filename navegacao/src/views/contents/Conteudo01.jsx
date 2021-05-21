import React from 'react'
import { useParams } from 'react-router-dom'

const Conteudo01 = props => {
    const { usuario } = useParams()

    return (
    <div>
        <h1> Condeúdo 01 :D </h1> 
        <h3> User: { usuario } </h3>
    </div>
    )
}

export default Conteudo01
