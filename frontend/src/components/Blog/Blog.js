import { React } from "react";
import BlogCard from "./BlogCard";
import blogHeader from "./assets/blog-hero.svg";
import "./blog.css";

const Blog = ({ blogPosts }) => {
  return (
    <div className="container">
      <div
        className="blog-hero flex flex--space-between flex--align-center"
        data-collapse="desktop"
      >
        <div className="blog-hero__info">
          <h3 className="blog-box-title">BLOG UDOMI LJUBIMCA</h3>
          <p>
            Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Nam
            condimentum tempus diam.
          </p>
        </div>
        <img src={blogHeader} alt="Udomi Ljubimca" />
      </div>
      <div className="flex flex--space-between flex-wrap">
        {blogPosts.map((item) => (
          <BlogCard title={item.title} desc={item.desc} url={item.url} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
