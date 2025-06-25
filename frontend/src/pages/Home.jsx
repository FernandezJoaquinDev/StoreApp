import ProductCard from "../components/ProductCard";
import { IoReload } from "react-icons/io5";

function Home({ listaProductos, handleCarrito }) {
  return (
    <div className="container">
      <div className="row">
        {listaProductos && listaProductos.length > 0 ? (
          listaProductos.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <ProductCard item={item} handleCarrito={handleCarrito} />
            </div>
          ))
        ) : (
          <div>
            <div className="text-center">
              <IoReload size={30} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
