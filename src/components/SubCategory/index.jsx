import React, { useState, useEffect } from "react";
import axios from "axios";
import { Endpoints } from "../../api/Endpoints";
import { useParams } from 'react-router-dom'

const SubCategory = () => {
  const {catId} = useParams()
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, [catId]);

  const fetchData = () => {
    let URL = typeof catId === "undefined"?Endpoints.CATEGORY_URL:Endpoints.SUB_CATEGORY_URL + catId;
    axios
      .get(URL)
      .then((respose) => setSubCategories(respose.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2 className="text-center">Sub Category</h2>
      <ul className="list-group">
        {subCategories.map((item) => (
          <li className="list-group-item">{item.subName}</li>
        ))}
      </ul>
    </div>
  );
};
export default SubCategory;
