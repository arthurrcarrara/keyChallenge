import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../api";
import "./searchProduct.css";
import Images from '../images/images'

const images = Images

const addToCard = () => {
  alert("Product added!");
};

export default (props) => {
  const [products, setProducts] = useState();

  const [productSearchCode, setProductSearchCode] = useState("");
  const [currentProduct, setCurrentProduct] = useState(undefined);


  useEffect(() => {
    (async () => {
      const response = await api.get("/products");
      setProducts(response.data.products);
    })();
  }, []);

  function searchProduct() {
    const product = products.filter((e) => e.code === productSearchCode);

    setCurrentProduct(product);

    
  }

  function productCodeChange(e) {
    setProductSearchCode(e.target.value);
  }

  function currentImage(){
    const image = images.filter((e) => e.id === currentProduct[0].code)
    return image[0].url
}

  

  return (
    <div className="searchProduct">
      <div className="searchArea">
        <div className="displayArea">
          <h1>Search Product</h1>
          <h3>By Code</h3>

          <input
            type="text"
            value={productSearchCode}
            onChange={productCodeChange}
          />
          <button className="btn" onClick={searchProduct}>
            Search Product
          </button>
          <div className="imageLayout">
            <img className="imageContainer" src="https://images.unsplash.com/photo-1616088886430-ccd86fef0713?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fEo5eXJQYUhYUlFZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
          </div>
        </div>
      </div>

      <div className="searchInfo">
        <div className="wrapperSearch">
          
          {currentProduct && !currentProduct.length && <h1>Produto nao encontrado</h1>}

          {currentProduct && currentProduct.length && (
            <div className="searchProductInfo">
                <img src={currentImage()} alt="Product Photo"/>
              <h1>{currentProduct[0].name}</h1>
              <h3>{currentProduct[0].price.formattedValue}</h3>
              <h3>Product code: {currentProduct[0].code}</h3>
              <div
                className="productDescription"
                dangerouslySetInnerHTML={{ __html: currentProduct[0].description }}
              />

              <div className="btnWrapperProduct">
                <Link to="/">
                  <button className="btn">Back</button>
                </Link>

                {currentProduct[0].stock.stockLevel ? (
                  <button className="btn" onClick={addToCard}>
                    Add to Cart
                  </button>
                ) : (
                  <span className="outOfStock">Out of Stock</span>
                )}
              </div>
            </div>
          )}
          {/* <div className="resultsInfo">
            {products && (
              <div className="productInfo">
                <h1>{products.name}</h1>
                <h3>
                   {products.price.formattedValue}
                </h3>
                <h3>Product code: {products.code}</h3>
                <div
                  className="productDescription"
                  dangerouslySetInnerHTML={{ __html: products.description }}
                />

                <div className="btnWrapperProduct">
                  <Link to="/">
                    <button className="btn">Back</button>
                  </Link>

                  {products.stock.stockLevel ? (
                    <button className="btn" onClick={addToCard}>
                      Add to Cart
                    </button>
                  ) : (
                    <span className="outOfStock">Out of Stock</span>
                  )}
                </div>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </div>
  );
};
