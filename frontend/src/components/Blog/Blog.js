import { React, useState } from "react";
import BlogCard from "./BlogCard";
import Hero from "../Sections/Hero";
import BlogBg from "../../assets/blog.png";
import "./blog.css";
import ReactPaginate from "react-paginate";

const Blog = ({ blogPosts }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const POST_PER_PAGE = 2;
  const offset = currentPage * POST_PER_PAGE;
  const pageCount = Math.ceil(blogPosts.length / POST_PER_PAGE);

  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <Hero
        title={"BLOG"}
        desc={
          "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam condimentum tempus diam."
        }
        bg={BlogBg}
      />
      <div className="container">
        {blogPosts.slice(offset, offset + POST_PER_PAGE).map((item) => (
          <BlogCard
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
