import React from "react";
import '../estilos/contador.css'


function Contador({numero}) {


    return( <div className="contador"><p className="numeroContador">{numero}</p></div>

    )
}


export default Contador