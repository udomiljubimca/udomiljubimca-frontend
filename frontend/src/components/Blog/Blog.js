import React, { useState } from "react";
import BlogCard from "./BlogCard";
import Hero from "../Sections/Hero";
import "./blog.css";
import ReactPaginate from "react-paginate";

/**
 * @param page {string} [page]/:id
 * @param posts {object} posts
 * @param title {string} hero title
 * @param desc {string} hero description
 * @param background {string} hero background image
 */

const Blog = ({ page, posts, title, desc, background }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const POST_PER_PAGE = 2;
  const offset = currentPage * POST_PER_PAGE;
  const pageCount = Math.ceil(posts.length / POST_PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <Hero
        title={title}
        desc={desc}
        bg={background}
      />
      <div className="container">
        {posts.slice(offset, offset + POST_PER_PAGE).map((item) => (
          <BlogCard
            page={page}
            title={item.title}
            key={item.title}
            desc={item.desc}
            url={item.url}
          />
        ))}
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={
            "pagination flex flex--justify-center flex--align-center"
          }
          previousLinkClassName={"pagination__link"}
          nextLinkClassName={"pagination__link"}
          disabledClassName={"pagination__link--disabled"}
          activeClassName={"pagination__link--active"}
          pageClassName={"pagination_item"}
          className="flex"
        />
      </div>
    </>
  );
};

export default Blog;
