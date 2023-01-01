import React from "react";
import styles from "./pagination.module.css"
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumber.map((number) => (
          <li key={number} >
            <a href="!#" onClick={() => paginate(number)} >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
