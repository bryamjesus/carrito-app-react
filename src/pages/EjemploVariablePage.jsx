import { useEffect, useState } from "react";

const EjemploVariablePage = () => {
  const [valor, setValor] = useState(false);

  //console.log('Primer Log')
  useEffect(() => {
    console.log('Primer useEffect')
  }, [])

  //console.log('Segundo Log')
  const handleChange = (e) => {
    const valor = e.target.value
    setValor(valor)
  }

  return (
    <div className="container">
      <h1>Ejemplo Variables</h1>
      <h4>Temperatura: {valor}</h4>
      <input type='text' onChange={handleChange} />
    </div>
  );
}

export default EjemploVariablePage;