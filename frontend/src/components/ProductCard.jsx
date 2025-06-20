function ProductCard({ datos }) {
  return (
    <div>
      <div className="card" style="width: 18rem;">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{datos.name}</h5>
          <p className="card-text">
            precio: ${datos.price}
            stock: {datos.stock}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
