import React from "react";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";



function Products() {
  return (
    <section>
      <Navbar />
      <div>
        <input type="search" placeholder="Search Products" />
      </div>
      <nav>
        <Link to="/products/featured">Featured</Link>
        <Link to="/products/new">New</Link>
      </nav>
      <Outlet />
    </section>
  );
}

export default Products;

