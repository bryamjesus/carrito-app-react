import { useEffect, useState } from "react"

const EjemploListaPage = () => {
  const [lista, setLista] = useState([])

  const listar = () => {
    const personas = [
      { id: 1, nombre: 'Elizabeth', profesion: 'QA' },
      { id: 2, nombre: 'Bryam', profesion: 'Programador' },
      { id: 3, nombre: 'Andrea', profesion: 'Abogada' },
    ]
    setLista(personas)
  }

  useEffect(() => {
    listar();
  }, [])

  return (
    <>
      <div className="container">
        <h1>Ejemplo Listado</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Profesión</th>
            </tr>
          </thead>
          <tbody>
            {
              lista.map(item => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.profesion}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default EjemploListaPage