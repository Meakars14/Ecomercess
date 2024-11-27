import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state

  const getData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (err) {
      setError("Failed to load products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container-area my-5">
     <br/> <br/> <br/> <br/> <br/>
      {/* Display Loading or Error */}
      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger text-center">{error}</div>
      ) : (
        <div className="row">
          {products.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={item.id}>
              <div className="card product-card h-100 shadow-lg border-0 rounded">
                <img
                  src={item.image}
                  className="card-img-top product-img bg-reader"
                  alt={item.title}
                  style={{ height: '300px' }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-truncate mb-2">{item.title}</h5>
                  <p className="category text-muted mb-3">{item.category}</p>
                  <p className="card-text fw-bold text-primary">${item.price.toFixed(2)}</p>

                  <Link to={`/view/${item.id}`} className="btn btn-primary mt-auto w-100">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
