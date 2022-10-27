import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from "./Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://apolis-grocery.herokuapp.com/api/category")
      .then((response) => setCategories(response.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1 className="text-center">All Categories</h1>
      <div className="row">
        {
            categories.map(item => <Category data={ item } />)
        }
      </div>
    </div>
  );
};
export default CategoryList;
