import React from "react";
import Navbar from "./Navbar";

function PageNotFound() {
  return (
    <section>
      <Navbar />
      <div className="page-not-found">
        <h1>404</h1>
        <h2>Page Not Found!</h2>
      </div>
    </section>
  );
}

export default PageNotFound;
