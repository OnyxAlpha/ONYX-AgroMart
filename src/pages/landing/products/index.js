/* Extension shortcut = rafc */
import { Link } from 'react-router-dom';
import React from 'react'

function Products () {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
    </div>
  )
}

export default Products;
