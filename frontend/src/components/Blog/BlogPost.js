import { React } from "react";
import { useRouteMatch } from "react-router-dom";
import placeholder from "../../assets/placeholder.svg";
import "./blogPost.css";

const BlogPost = ({ blogPosts }) => {
  const { params } = useRouteMatch();
  const blogPost = blogPosts.find((post) => post.url === params.id);
  return (
    <>
      <div className="blog-post container">
        <div>
          <img
            className="blog-post__hero"
            src={placeholder}
            alt={blogPost.title}
          />
          <h1 className="blog-post__title">{blogPost.title}</h1>
          <p className="blog-post__desc">{blogPost.desc}</p>
          <div className="blog-post__author-info">
            <p>{blogPost.fullName}</p>
            <p>{blogPost.role}</p>
            <p>{blogPost.date}</p>
          </div>
        </div>
      </div>
      {/* TODO blog slider */}
      <div className="container blog-featured">TODO "featured" slider</div>
    </>
  );
};

export default BlogPost;
