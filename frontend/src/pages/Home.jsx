import ProductCard from "../components/ProductCard";

function Home({ listaProductos }) {
  return (
    <div>
      {listaProductos.map((item) => {
        <div className="container">
          <ProductCard item={item} />;
        </div>;
      })}
    </div>
  );
}
export default Home;
