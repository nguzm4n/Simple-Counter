import React from 'react'
import './estilos/global.css'
import Contador from './componentes/contador.jsx'
import { useEffect, useState } from 'react'

const App = () => {

const [numero, setNumero] = useState(0)
 

useEffect(() => {
  const interval = setInterval(() => {
    setNumero(valorActual => valorActual + 1)
  }, 1000)
return () => clearInterval(interval)
}, [])



  return (
    <div>
        <div className='container '>
        <Contador
        numero={Math.floor(numero/10000%10)}/>       
        <Contador
        numero={Math.floor(numero/1000%10)}/>       
        <Contador
        numero={Math.floor(numero/100%10)}/>       
        <Contador
       numero={Math.floor(numero/10%10)}/>       
        <Contador
          numero={Math.floor(numero/1%10)} />     
          
        </div>
    </div>
  )
}

export default App