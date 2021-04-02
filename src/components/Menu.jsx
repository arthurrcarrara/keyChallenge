import React from "react";
import "./menu.css";

import { Link } from "react-router-dom";

export default (props) => {
  return (
    <header>
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/SearchProducts">
            <li>Search Product</li>
          </Link>
        </ul>
      </div>
    </header>
  );
};
