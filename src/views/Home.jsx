import React, { Component, useEffect, useState } from "react";
import { useHistory } from "react-router";
import api from "../api";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Images from "../images/images.js";
import "./home.css";
import "./buttons.css";

const images = Images;

const addToCard = () => {
  alert("Product added!");
};

export default function Home(/*props*/) {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await api.get("/products");
      setProducts(response.data.products);
    })();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slides",
  };

  const priceValues = products.map((product) => {
    return product.price.value;
  });

  const smallestValue = Math.min(...priceValues);

  return (
    <div className="home">
      <div className="carousel">
        <Slider {...settings}>
          {products &&
            products.map((product, index) => {
              // {const imageProduct = images.findIndex(image =>
              //   image.id === product.code
              // )
              // console.log(imageProduct)}
              return (
                <div key={index}>
                  {product.price.value === smallestValue ? (
                    <span className="banner">LOWEST PRICE PRODUCT</span>
                  ) : (
                    ""
                  )}
                  <div className="carouselContent">
                    <img className="imgContainer" src={images[index].url} alt="" />
                    <div className="btnWrapper">
                      <button
                        className="moreBtn"
                        onClick={() =>
                          history.push(`/products/${product.code}`)
                        }
                      >
                        See More
                      </button>
                      {product.stock.stockLevel ? (
                        <button className="btn" onClick={addToCard}>
                          Add to Cart
                        </button>
                      ) : (
                        <span className="outOfStock">Out of Stock</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}
