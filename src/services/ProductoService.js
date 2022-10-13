import productos from "../data/productos";
import productos from "../data/productos";

export const listar = () => productos

export const detalle = (id) => {
  const producto = productos.find(producto => producto.id === Number(id))
  return producto
}