import React, { useState, useEffect } from "react";
import axios from "axios";
import { Endpoints } from "../../api/Endpoints";
import Navbar from "../../components/Navbar";
import { Constants } from "../../api/Constants";
import './Style.css';
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = () => {
    axios
      .get(Endpoints.PRODUCT_BY_ID + id)
      .then((response) => setProduct(response.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="wrapper">
          <div className="row">
            <div className="col-lg-6">
              <img
                src={Constants.IMAGE_URL + product.image}
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="col-lg-6">
              <h3>{product.productName}</h3>
              <p>{product.unit}</p>
              <p>{product.description}</p>
              <br />
              <h2>
                <span>&#8377;</span> {product.price}
                <span className="mrp">
                  <span>&#8377;</span>
                  {product.mrp}
                </span>
              </h2>
              <br />
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
