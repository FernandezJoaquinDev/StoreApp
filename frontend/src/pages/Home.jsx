import ProductCard from "../components/ProductCard";

function Home({ listaProductos }) {
  return (
    <div className="container">
      <div className="row">
        {listaProductos.map((item, index) => (
          <div className="col-md-3 mb-4">
            <ProductCard item={item} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;
