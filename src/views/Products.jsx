import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import api from "../api";
import Images from '../images/images.js'

import "./products.css";
import "./buttons.css";

const images = Images

const addToCard = () => {
  alert("Product added!");
};

export default (props) => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await api.get(`/${id}`);
      // console.log(response.data)

      setProduct(response.data);
      // console.log(product)
    })();
  }, []);

  console.log(product);

  function currentImage(){
      const image = images.filter((e) => e.id === product.code)
      return image[0].url
  }

  return (
    <div className="products">
      <div className="wrapper">
        {product && (
          <div className="productInfo">
            <img src={currentImage()} alt="Product Photo"/>
            <h1>{product.name}</h1>
            <h3>
              {product.price.currencyIso} {product.price.formattedValue}
            </h3>
            <h3>Product code: {product.code}</h3>
            <div
              className="productDescription"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

            <div className="btnWrapperProduct">
              <Link to="/">
                <button className="btn">Back</button>
              </Link>

              {product.stock.stockLevel ? (
                <button className="btn" onClick={addToCard}>
                  Add to Cart
                </button>
              ) : (
                <span className="outOfStock">Out of Stock</span>
              )}
            </div>
          </div>
        )}
      </div>


    </div>
  );
};
