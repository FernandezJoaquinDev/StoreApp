import ProductCard from "../components/ProductCard";

function Home({ data }) {
  return (
    <div>
      {data.map((item) => {
        <ProductCard data={item} />;
      })}
    </div>
  );
}
export default Home;
