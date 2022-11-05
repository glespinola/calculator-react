import React from 'react'
import '../stylesheets/Botones.css'

const Botones = (props) => {
  const esOperador = valor =>{
    return isNaN(valor) && (valor !=='.') && (valor !== '=')
  }
  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trim()} onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  )
}

export default Botones