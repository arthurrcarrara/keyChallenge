import React from "react";
import './content.css'

import { Switch, Route, useParams } from 'react-router-dom'

import Home from "../views/Home";
import Products from "../views/Products";
import SearchProducts from "../views/SearchProduct"

const Content = (props) => (
  <main>
    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route path="/product">
          <Product/>
        </Route> */}
        <Route path="/products/:id">
          <Products/>
        </Route>
        <Route path="/searchProducts">
          <SearchProducts/>
        </Route>
      </Switch>
    </div>
  </main>
);

export default Content;
