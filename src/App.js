import './App.css';
import BotonClear from './components/BotonClear';
import Botones from './components/Botones';
import Pantalla from './components/Pantalla';
import FreeCodeCampLogo from './img/freecodecamp-logo.png'
import { useState } from 'react';
import { evaluate } from 'mathjs'
import Swal from 'sweetalert2'
function App() {

  const [input, setInput] = useState('')
  const addInput = val => {
    setInput(input + val)
  }

  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input))
    }else{
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong! Please enter valid data.'
    })
    }
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img src={FreeCodeCampLogo} className='freecodecamp-logo' alt='Logo de FreeCodeCamp'/>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Botones manejarClick={addInput}>1</Botones>
          <Botones manejarClick={addInput}>2</Botones>
          <Botones manejarClick={addInput}>3</Botones>
          <Botones manejarClick={addInput}>+</Botones>
        </div>
        <div className='fila'>
          <Botones manejarClick={addInput}>4</Botones>
          <Botones manejarClick={addInput}>5</Botones>
          <Botones manejarClick={addInput}>6</Botones>
          <Botones manejarClick={addInput}>-</Botones>
        </div>
        <div className='fila'>
          <Botones manejarClick={addInput}>7</Botones>
          <Botones manejarClick={addInput}>8</Botones>
          <Botones manejarClick={addInput}>9</Botones>
          <Botones manejarClick={addInput}>*</Botones>
        </div>
        <div className='fila'>
          <Botones manejarClick={calcularResultado}>=</Botones>
          <Botones manejarClick={addInput}>0</Botones>
          <Botones manejarClick={addInput}>.</Botones>
          <Botones manejarClick={addInput}>/</Botones>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=> setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
