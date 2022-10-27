import React, { useState, useEffect } from "react";
import axios from "axios";
import { Endpoints } from "../../api/Endpoints";
import Product from "./Product";
import { useParams } from 'react-router-dom'

const ProductList = () => {
  const {catId} = useParams()
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, [catId]);

  const fetchData = () => {
    let URL = typeof catId === "undefined"?Endpoints.PRODUCT_BY_ID:Endpoints.PRODUCT_BY_CAT_ID + catId;
    axios
      .get(URL)
      .then((response) => setProducts(response.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="text-center">All Products</h1>
      <div className="row">
        {
          products.map(item => <Product data={ item } />)
        }
      </div>
    </div>
  );
};
export default ProductList;
