import React from "react";
import Pagination from "./Pagination";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import User from "./User";

function Users() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage] = useState(3);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=20")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        setUser(data.results);
        setLoading(false);
      });
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUsers = user.slice(indexOfFirstUser, indexOfLastUser);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Next and Prev
  const handleNext = () => {
    if (currentPage === 7) {
      return currentPage;
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage === 1) {
      return currentPage;
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="container">
      <Navbar />
      <div className="users-container">
        <h1>Users</h1>
        <User user={currentUsers} loading={loading} />
        <Pagination
          userPerPage={userPerPage}
          totalUser={user.length}
          paginate={paginate}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      </div>
    </section>
  );
}

export default Users;
