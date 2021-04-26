import React, { useContext } from "react";
import { BookContext } from "../BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Ivan Reading List</h1>
      <p>Current you have {books.length} books to get trougt...</p>
    </div>
  );
};

export default Navbar;
