import { useEffect, useState } from "react";

const EjemploPage = () => {
  const [puerta, setPuerta] = useState(false);

  //console.log('Primer Log')
  useEffect(() => {
    console.log('Primer useEffect')
  })

  //console.log('Segundo Log')
  const handleButton = (parametro) => {
    console.log(parametro)
    setPuerta(!puerta)
  }

  return (
    <div className="container">
      <h1>Ejemplo</h1>
      <h4>Puerta {puerta ? 'abierta' : 'cerrada'}</h4>
      <button onClick={() => handleButton('dsaf')}>{puerta ? 'Cerrar' : 'Abrir'}</button>
    </div>
  );
}

export default EjemploPage;