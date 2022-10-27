import React from "react";
import { Constants } from "../../../api/Constants";
import "./Style.css";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { _id,productName, unit, price, mrp, image } = props.data;
  return (
    <div className="col-sm-4">
      <div className="card">
        <img
          src={Constants.IMAGE_URL + image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">{unit}</p>
          <h2>
            <span>&#8377;</span> {price}
            <span className="mrp">
              <del>
                <span>&#8377;</span>
                {mrp}
              </del>
            </span>
          </h2>
          <Link className="btn btn-primary btn-block" to={ '/products/detail/'+ _id }>
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Product;
