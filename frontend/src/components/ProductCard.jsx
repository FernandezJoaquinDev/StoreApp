import { FaCartPlus, FaPlus } from "react-icons/fa";

function ProductCard({ item }) {
  return (
    <div>
      <div className="card text-center">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <div className="d-flex justify-content-around">
            <p className="card-text">precio: ${item.price}</p>
            <p className="card-text"> stock: {item.stock}</p>
          </div>
          <span href="#" className="btn btn-primary">
            <FaPlus />
            <FaCartPlus />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
