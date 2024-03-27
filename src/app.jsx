import React from 'react'
import './estilos/global.css'
import Contador from './componentes/contador.jsx'
import { useEffect, useState } from 'react'

const App = () => {

  const [numero, setNumero] = useState(0)

useEffect(() => {
  
  const interval = setInterval(() => {
    setNumero(numero + 1)
  }, 1000)
return () => clearInterval(interval)
})



  return (
    <div>
        <div className='container '>
        <Contador/>       
        <Contador/>       
        <Contador/>       
        <Contador/>       
        <Contador
          numero={numero} />     
          
        </div>
    </div>
  )
}

export default App