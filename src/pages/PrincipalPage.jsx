import { useEffect, useState } from "react";
import { detalle, listar } from "../services/ProductoService";

const PrincipalPage = () => {
  const [lista, setLista] = useState([])
  const [canasta, setCanasta] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const productos = listar()
    if (productos) {
      setLoading(false)
      setLista(productos)
    }
  }, [])

  useEffect(() => {
    const productos = listar()
    if (productos) {
      setLoading(false)
      setLista(productos)
    }
  }, [])

  const handleAddProduct = (id) => {
    console.log(canasta)
    let producto = detalle(id)
    producto.cantidad = 1
    const nCanasta = [...canasta, producto]
    setCanasta(nCanasta)
    console.log(canasta)
  }

  return (
    <div className="container">
      <h1>Principal Page</h1>
      <div className="row">
        <div className="col-md-8">
          <h3>Lista de Productos</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                loading && (<tr><td colSpan={4}>Cargando Productos...</td></tr>)
              }
              {
                !lista.length ? (<tr><td colSpan={4}>Sin Resultados</td></tr>) :
                  (lista.map((element) => (
                    <tr key={element.id}>
                      <td>{element.id}</td>
                      <td>{element.nombre}</td>
                      <td>{element.precio}</td>
                      <td>
                        <button onClick={() => handleAddProduct(element.id)} className="btn btn-primary">
                          <i className="bi bi-cart-fill"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                  )
              }
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <h3>Resumen</h3>
          <ul className="list-group list-group-flush">
            {
              canasta.map((elem) => (
                <li className="list-group-item" key={elem.id}>
                  {elem.nombre}<br />
                  {elem.precio} x {elem.cantidad} = {(elem.precio * elem.cantidad)}
                </li>
              ))
            }
          </ul>
        </div>
      </div>

    </div >
  );
}

export default PrincipalPage;